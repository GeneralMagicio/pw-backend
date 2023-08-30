import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { getPairwiseCombinations, sortCombinations } from 'src/utils';
import {
  generateZeroMatrix,
  getRankingForSetOfDampingFactors,
  toFixedNumber,
} from 'src/utils/mathematical-logic';
import { combinations } from 'mathjs';
import { CollectionService } from 'src/collection/collection.service';

@Injectable()
export class FlowService {
  private readonly logger = new Logger(FlowService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly collectionService: CollectionService,
  ) {}

  // This would determine the latest collection a user has voted in
  // So they can pick up where they've left off
  determineResumeVoting = async (userId: number) => {
    const [latestProjectVote, latestCollectionVote, latestExpertiseVote] =
      await Promise.all([
        this.prismaService.projectVote.findFirst({
          where: { user_id: userId },
          orderBy: { updated_at: 'desc' },
          include: { project1: true },
        }),
        this.prismaService.collectionVote.findFirst({
          where: { user_id: userId },
          orderBy: { updated_at: 'desc' },
          include: { collection1: true },
        }),
        this.prismaService.expertiseVote.findFirst({
          where: { user_id: userId },
          orderBy: { updated_at: 'desc' },
          include: { collection1: true },
        }),
      ]);

    // No votes whatsoever
    if (!latestProjectVote && !latestCollectionVote && !latestExpertiseVote)
      return -1;

    if (
      latestProjectVote &&
      latestProjectVote.updated_at > (latestCollectionVote?.updated_at || 0) &&
      latestProjectVote.updated_at > (latestExpertiseVote?.updated_at || 0)
    )
      return {
        type: 'project',
        collectionId: latestProjectVote.project1.collection_id,
      };

    if (
      latestCollectionVote &&
      latestCollectionVote.updated_at > (latestProjectVote?.updated_at || 0) &&
      latestCollectionVote.updated_at > (latestExpertiseVote?.updated_at || 0)
    )
      return {
        type: 'collection',
        collectionId: latestCollectionVote.collection1.parent_collection_id,
      };

    if (
      latestExpertiseVote &&
      latestExpertiseVote.updated_at >
        (latestCollectionVote?.updated_at || 0) &&
      latestExpertiseVote.updated_at > (latestProjectVote?.updated_at || 0)
    )
      return {
        type: 'expertise',
        collectionId: latestExpertiseVote.collection1.parent_collection_id,
      };

    return -1;
  };

  hasAnsweredMainQuestions = async (userId: number) => {
    const [answeredExpertise, answeredImpact] = await Promise.all([
      this.hasAnsweredExpertise(userId),
      this.hasAnsweredImpact(userId),
    ]);

    return answeredExpertise && answeredImpact;
  };

  hasAnsweredExpertise = async (userId: number) => {
    const [expertiseVotes, topLevelCollections] = await Promise.all([
      this.prismaService.expertiseVote.findMany({
        where: { user_id: userId },
      }),
      this.prismaService.collection.findMany({
        where: { parent_collection_id: null },
      }),
    ]);

    return (
      expertiseVotes.length === combinations(topLevelCollections.length, 2)
    );
  };

  hasAnsweredImpact = async (userId: number) => {
    const [topLevelVotes, topLevelCollections] = await Promise.all([
      this.prismaService.collectionVote.findMany({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: null },
          collection2: { parent_collection_id: null },
        },
      }),
      this.prismaService.collection.findMany({
        where: { parent_collection_id: null },
      }),
    ]);

    return topLevelVotes.length === combinations(topLevelCollections.length, 2);
  };

  isCollectionFinished = async (userId: number, collectionId: number) => {
    const status = await this.prismaService.userCollectionFinish.findUnique({
      where: {
        user_id_collection_id: {
          collection_id: collectionId,
          user_id: userId,
        },
      },
    });

    return status !== null;
  };

  isCollectionLocked = async (
    userId: number,
    collectionId: number,
  ): Promise<boolean> => {
    const mainQuestionsAnswered = await this.hasAnsweredMainQuestions(userId);

    if (!mainQuestionsAnswered) return true;

    const collection = await this.prismaService.collection.findUnique({
      where: { id: collectionId },
      include: { parent_collection: true },
    });

    if (!collection) throw new Error('Collection id invalid');

    const isTopLevel = collection.parent_collection === null;

    if (!isTopLevel)
      return this.isCollectionLocked(userId, collection.parent_collection_id!);

    const nextCollection = await this.getNextHigherExpertiseCollection(
      userId,
      collectionId,
    );

    // it's the collection with the highest expertise
    if (nextCollection === null) return false;
    if (await this.isCollectionFinished(userId, nextCollection.id))
      return false;
    return true;
  };

  voteForProjects = async (
    userId: number,
    project1Id: number,
    project2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateProjectVote(project1Id, project2Id, pickedId);
    const payload = {
      user_id: userId,
      project1_id: project1Id,
      project2_id: project2Id,
      picked_id: pickedId,
    };
    const vote = await this.prismaService.projectVote.findFirst({
      where: { ...payload, picked_id: undefined },
    });
    if (vote) {
      await this.prismaService.projectVote.update({
        data: payload,
        where: { id: vote.id },
      });
    } else {
      await this.prismaService.projectVote.create({
        data: payload,
      });
    }
  };

  getOveralRanking = async (cid = null) => {
    console.log(cid);
  };

  voteForExpertise = async (
    userId: number,
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateExpertiseVote(collection1Id, collection2Id, pickedId);
    const payload = {
      user_id: userId,
      collection1_id: collection1Id,
      collection2_id: collection2Id,
      picked_id: pickedId,
    };
    const vote = await this.prismaService.expertiseVote.findFirst({
      where: { ...payload, picked_id: undefined },
    });
    if (vote) {
      await this.prismaService.expertiseVote.update({
        data: payload,
        where: { id: vote.id },
      });
    } else {
      await this.prismaService.expertiseVote.create({
        data: payload,
      });
    }
  };

  voteForCollections = async (
    userId: number,
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateCollectionVote(collection1Id, collection2Id, pickedId);
    const payload = {
      user_id: userId,
      collection1_id: collection1Id,
      collection2_id: collection2Id,
      picked_id: pickedId,
    };
    const vote = await this.prismaService.collectionVote.findFirst({
      where: { ...payload, picked_id: undefined },
    });
    if (vote) {
      await this.prismaService.collectionVote.update({
        data: payload,
        where: { id: vote.id },
      });
    } else {
      await this.prismaService.collectionVote.create({
        data: payload,
      });
    }
  };

  getCollections = async (
    userId: number,
    parentCollectionId: number | null,
  ) => {
    const collections = await this.prismaService.collection.findMany({
      where: { parent_collection_id: parentCollectionId },
    });

    const withAdditionalFields = await Promise.all(
      collections.map(async (collection) => {
        const [locked, hasSubcollections, voted] = await Promise.all([
          this.isCollectionLocked(userId, collection.id),
          this.hasSubcollections(collection.id),
          this.isCollectionFinished(userId, collection.id),
        ]);
        return {
          ...collection,
          locked,
          hasSubcollections,
          voted,
        };
      }),
    );
    return withAdditionalFields;
  };

  getNextCollection = async (
    userId: number,
    parentCollectionId?: number | null,
  ): Promise<number | null> => {
    const lastFinishedCollection = (
      await this.prismaService.userCollectionFinish.findFirst({
        where: {
          user_id: userId,
          collection:
            parentCollectionId !== undefined
              ? { parent_collection_id: parentCollectionId }
              : undefined,
        },
        include: { collection: { include: { parent_collection: true } } },
        orderBy: { updated_at: 'desc' },
      })
    )?.collection;

    if (!lastFinishedCollection) return null;

    if (lastFinishedCollection.parent_collection_id === null)
      return (
        (
          await this.getPreviousLowerExpertiseCollection(
            userId,
            lastFinishedCollection.id,
          )
        )?.id || null
      );

    const finishedSiblings =
      await this.prismaService.userCollectionFinish.findMany({
        select: { collection_id: true },
        where: {
          collection: {
            parent_collection_id: lastFinishedCollection.parent_collection_id,
          },
        },
      });

    const unFinishedSiblings = await this.prismaService.collection.findMany({
      where: {
        parent_collection_id: lastFinishedCollection.parent_collection_id,
        id: { notIn: finishedSiblings.map((item) => item.collection_id) },
      },
    });

    if (unFinishedSiblings.length > 0) return unFinishedSiblings[0].id;

    const grandparentId =
      lastFinishedCollection?.parent_collection?.parent_collection_id;

    // If not, Go to the sibling of the parent (recursive)
    if (unFinishedSiblings.length === 0 && grandparentId !== undefined) {
      return this.getNextCollection(userId, grandparentId);
    }

    return null;
  };

  getCollectionRankingWithProjectType = async (
    userId: number,
    collectionId: number,
  ) => {
    const [collection, allVotes, allProjects] = await Promise.all([
      this.prismaService.collection.findUnique({
        where: { id: collectionId },
        select: { name: true },
      }),
      this.prismaService.projectVote.findMany({
        where: {
          user_id: userId,
          project1: { collection_id: collectionId },
          project2: { collection_id: collectionId },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          collection_id: collectionId,
        },
      }),
    ]);

    const mappingObject: Record<number, number> = allProjects.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const matrix = this.buildVotesMatrix(
      allVotes.map(({ project1_id, project2_id, picked_id }) => ({
        id1: project1_id,
        id2: project2_id,
        picked_id: picked_id,
      })),
      allProjects.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const ranking = await Promise.all(
      result.map(async (item, index) => ({
        share: item,
        project: await this.prismaService.project.findUnique({
          where: { id: zeroBasedMappingFunction(index) },
        }),
      })),
    );

    return {
      collectionTitle: collection?.name,
      ranking: ranking.sort((a, b) => b.share - a.share),
    };
  };

  getExpertiseRanking = async (userId: number) => {
    const [allVotes, allCollections] = await Promise.all([
      this.prismaService.expertiseVote.findMany({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: null },
          collection2: { parent_collection_id: null },
        },
      }),
      this.prismaService.collection.findMany({
        where: {
          parent_collection_id: null,
        },
      }),
    ]);

    const mappingObject: Record<number, number> = allCollections.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const matrix = this.buildVotesMatrix(
      allVotes.map(({ collection1_id, collection2_id, picked_id }) => ({
        id1: collection1_id,
        id2: collection2_id,
        picked_id: picked_id,
      })),
      allCollections.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const ranking = await Promise.all(
      result.map(async (item, index) => ({
        share: item,
        project: await this.prismaService.collection.findUnique({
          where: { id: zeroBasedMappingFunction(index) },
        }),
      })),
    );

    return {
      collectionTitle: 'Root',
      ranking: ranking.sort((a, b) => b.share - a.share),
    };
  };

  getNextHigherExpertiseCollection = async (
    userId: number,
    collectionId: number,
  ) => {
    const { ranking } = await this.getExpertiseRanking(userId);

    const index = ranking.findIndex(
      (item) => item.project?.id === collectionId,
    );

    if (index === 0) return null;

    return ranking[index - 1].project;
  };

  getPreviousLowerExpertiseCollection = async (
    userId: number,
    collectionId: number,
  ) => {
    const { ranking } = await this.getExpertiseRanking(userId);

    const index = ranking.findIndex(
      (item) => item.project?.id === collectionId,
    );

    if (index === ranking.length - 1) return null;

    return ranking[index + 1].project;
  };

  getCollectionRankingWithCollectionType = async (
    userId: number,
    collectionId?: number,
  ) => {
    const [collection, allVotes, allCollections] = await Promise.all([
      this.prismaService.collection.findFirst({
        select: { name: true },
        where: { id: collectionId || -1 },
      }),
      this.prismaService.collectionVote.findMany({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: collectionId },
          collection2: { parent_collection_id: collectionId },
        },
      }),
      this.prismaService.collection.findMany({
        where: {
          parent_collection_id: collectionId,
        },
      }),
    ]);

    const mappingObject: Record<number, number> = allCollections.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const matrix = this.buildVotesMatrix(
      allVotes.map(({ collection1_id, collection2_id, picked_id }) => ({
        id1: collection1_id,
        id2: collection2_id,
        picked_id: picked_id,
      })),
      allCollections.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const ranking = await Promise.all(
      result.map(async (item, index) => ({
        share: item,
        project: await this.prismaService.collection.findUnique({
          where: { id: zeroBasedMappingFunction(index) },
        }),
      })),
    );

    return {
      collectionTitle: collection?.name || 'Root',
      ranking: ranking.sort((a, b) => b.share - a.share),
    };
  };

  getCollectionPairs = async (
    userId: number,
    parentCollection?: number,
    count = 5,
  ) => {
    const [collection, allVotes, allCollections] = await Promise.all([
      this.prismaService.collection.findUnique({
        where: { id: parentCollection || -1 },
        select: { name: true },
      }),
      this.prismaService.collectionVote.findMany({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: parentCollection },
          collection2: { parent_collection_id: parentCollection },
        },
      }),
      this.prismaService.collection.findMany({
        where: {
          parent_collection_id: parentCollection,
        },
      }),
    ]);

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.collection1_id, vote.collection2_id],
      [] as number[],
    );

    const allIds = allCollections.map((collection) => collection.id);

    const votedCollectionsRanking = this.determineIdRanking(votedIds);

    // ascending id rankings (i.e., the last element has been voted the most)
    let idRanking: number[] = [];

    for (let i = 0; i < allIds.length; i++) {
      const value = allIds[i];
      if (!votedCollectionsRanking.includes(value)) idRanking.push(value);
    }

    idRanking = [...idRanking, ...votedCollectionsRanking];

    const combinations = getPairwiseCombinations(allIds);

    if (allVotes.length === combinations.length)
      return {
        pairs: [],
        totalPairs: combinations.length,
        votedPairs: allVotes.length,
        collectionTitle: collection?.name || 'Root',
        type: 'collection' as const,
        threshold: this.calculateThreshold(allIds.length, true),
      };

    const sortedCombinations = sortCombinations(combinations, idRanking);

    const result = [];
    let i = 0;
    while (result.length < count) {
      const combination = sortedCombinations[i];
      const px = combination[0];
      const py = combination[1];
      const index = allVotes.findIndex(
        (vote) =>
          (vote.collection1_id === px && vote.collection2_id === py) ||
          (vote.collection1_id === py && vote.collection2_id === px),
      );

      if (index === -1) result.push(combination);

      i++;
    }

    const res = await Promise.all(
      result.map((pair) =>
        this.prismaService.collection.findMany({
          where: {
            OR: [
              {
                id: pair[0],
              },
              {
                id: pair[1],
              },
            ],
          },
        }),
      ),
    );

    const pairs = await Promise.all(
      res.map(
        async (pair) =>
          await Promise.all(
            pair.map(async (collection) => ({
              ...collection,
              numOfChildren: await this.countNumOfProjects(collection.id),
              childProjects: await this.getChildProjects(collection.id),
            })),
          ),
      ),
    );

    return {
      pairs,
      totalPairs: combinations.length,
      votedPairs: allVotes.length,
      type: 'collection' as const,
      collectionTitle: collection?.name || 'Root',
      threshold: this.calculateThreshold(allIds.length, true),
    };
  };

  getExpertisePairs = async (userId: number, count = 5) => {
    const parentCollection = null;
    const [allVotes, allCollections] = await Promise.all([
      this.prismaService.expertiseVote.findMany({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: parentCollection },
          collection2: { parent_collection_id: parentCollection },
        },
      }),
      this.prismaService.collection.findMany({
        where: {
          parent_collection_id: parentCollection,
        },
      }),
    ]);

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.collection1_id, vote.collection2_id],
      [] as number[],
    );

    const allIds = allCollections.map((collection) => collection.id);

    const votedCollectionsRanking = this.determineIdRanking(votedIds);

    // ascending id rankings (i.e., the last element has been voted the most)
    let idRanking: number[] = [];

    for (let i = 0; i < allIds.length; i++) {
      const value = allIds[i];
      if (!votedCollectionsRanking.includes(value)) idRanking.push(value);
    }

    idRanking = [...idRanking, ...votedCollectionsRanking];

    const combinations = getPairwiseCombinations(allIds);

    if (allVotes.length === combinations.length)
      return {
        pairs: [],
        totalPairs: combinations.length,
        votedPairs: allVotes.length,
        collectionTitle: 'Expertise',
        type: 'expertise',
        threshold: this.calculateThreshold(allIds.length, true),
      };

    const sortedCombinations = sortCombinations(combinations, idRanking);

    const result = [];
    let i = 0;
    while (result.length < count) {
      const combination = sortedCombinations[i];
      const px = combination[0];
      const py = combination[1];
      const index = allVotes.findIndex(
        (vote) =>
          (vote.collection1_id === px && vote.collection2_id === py) ||
          (vote.collection1_id === py && vote.collection2_id === px),
      );

      if (index === -1) result.push(combination);

      i++;
    }

    const res = await Promise.all(
      result.map((pair) =>
        this.prismaService.collection.findMany({
          where: {
            OR: [
              {
                id: pair[0],
              },
              {
                id: pair[1],
              },
            ],
          },
        }),
      ),
    );

    const pairs = await Promise.all(
      res.map(
        async (pair) =>
          await Promise.all(
            pair.map(async (collection) => ({
              ...collection,
              numOfChildren: await this.countNumOfProjects(collection.id),
              childProjects: await this.getChildProjects(collection.id),
            })),
          ),
      ),
    );

    return {
      pairs,
      totalPairs: combinations.length,
      votedPairs: allVotes.length,
      collectionTitle: 'Expertise',
      type: 'expertise',
      threshold: this.calculateThreshold(allIds.length, true),
    };
  };

  getProjectPairs = async (userId: number, collectionId: number, count = 5) => {
    const [collection, allVotes, allProjects] = await Promise.all([
      this.prismaService.collection.findUnique({
        where: { id: collectionId },
        select: { name: true },
      }),
      this.prismaService.projectVote.findMany({
        where: {
          user_id: userId,
          project1: { collection_id: collectionId },
          project2: { collection_id: collectionId },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          collection_id: collectionId,
        },
      }),
    ]);

    if (!collection) throw new BadRequestException('Invalid collection id');

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.project1_id, vote.project2_id],
      [] as number[],
    );

    const allIds = allProjects.map((project) => project.id);

    const votedProjectsRanking = this.determineIdRanking(votedIds);

    // ascending id rankings (i.e., the last element has been voted the most)
    let idRanking: number[] = [];

    for (let i = 0; i < allIds.length; i++) {
      const value = allIds[i];
      if (!votedProjectsRanking.includes(value)) idRanking.push(value);
    }

    idRanking = [...idRanking, ...votedProjectsRanking];

    const combinations = getPairwiseCombinations(allIds);

    if (allVotes.length === combinations.length)
      return {
        pairs: [],
        totalPairs: combinations.length,
        votedPairs: allVotes.length,
        collectionTitle: collection.name,
        type: 'project' as const,
        threshold: this.calculateThreshold(allIds.length),
      };

    const sortedCombinations = sortCombinations(combinations, idRanking);

    const result = [];
    let i = 0;

    while (result.length < count) {
      const combination = sortedCombinations[i];
      const px = combination[0];
      const py = combination[1];
      const index = allVotes.findIndex(
        (vote) =>
          (vote.project1_id === px && vote.project2_id === py) ||
          (vote.project1_id === py && vote.project2_id === px),
      );

      if (index === -1) result.push(combination);

      i++;
    }

    const pairs = await Promise.all(
      result.map((pair) =>
        this.prismaService.project.findMany({
          where: {
            OR: [
              {
                id: pair[0],
              },
              {
                id: pair[1],
              },
            ],
          },
        }),
      ),
    );

    return {
      pairs,
      totalPairs: combinations.length,
      votedPairs: allVotes.length,
      collectionTitle: collection.name,
      type: 'project' as const,
      threshold: this.calculateThreshold(allIds.length),
    };
  };

  getCollectionSubunitType = async (
    collectionId?: number,
  ): Promise<'project' | 'collection'> => {
    const collection = await this.prismaService.collection.findFirst({
      where: { parent_collection_id: collectionId },
    });

    const project = collectionId
      ? await this.prismaService.project.findFirst({
          where: { collection_id: collectionId },
        })
      : null;

    if (collection && project)
      throw new InternalServerErrorException(
        'A collection can not have both projects and collections as its subunits',
      );

    if (!collection && !project)
      throw new BadRequestException('Invalid collection id');

    if (collection) return 'collection';
    return 'project';
  };

  hasThresholdVotes = async (
    collectionId: number,
    userId: number,
  ): Promise<boolean> => {
    const type = await this.getCollectionSubunitType(collectionId);
    const collection = await this.prismaService.collection.findUnique({
      where: { id: collectionId },
      include: {
        projects: type === 'project',
        subCollections: type === 'collection',
      },
    });
    if (!collection) throw new BadRequestException('Collection id invalid');

    const { projects, subCollections } = collection;

    const count = type === 'project' ? projects.length : subCollections.length;

    const threshold = this.calculateThreshold(count, type === 'collection');
    let numOfVotes = 0;

    if (type === 'collection') {
      numOfVotes = await this.prismaService.collectionVote.count({
        where: {
          user_id: userId,
          collection1: { parent_collection_id: collectionId },
          collection2: { parent_collection_id: collectionId },
        },
      });
    } else if (type === 'project') {
      numOfVotes = await this.prismaService.projectVote.count({
        where: {
          user_id: userId,
          project1: { collection_id: collectionId },
          project2: { collection_id: collectionId },
        },
      });
    }

    return numOfVotes / combinations(count, 2) >= threshold;
  };

  calculateOverallProgress = async (userId: number) => {
    const [allCollections, finishedCollections] = await Promise.all([
      this.prismaService.collection.findMany(),
      this.prismaService.userCollectionFinish.findMany({
        where: { user_id: userId },
      }),
    ]);

    return Math.ceil(
      (finishedCollections.length / allCollections.length) * 100,
    );
  };

  private hasSubcollections = async (collectionId: number) => {
    const subCollections = await this.prismaService.collection.findMany({
      select: { id: true },
      where: { parent_collection_id: collectionId },
    });

    return subCollections.length > 0;
  };

  private calculateThreshold = (count: number, forceAll = false) => {
    if (forceAll) return 1;
    const threshold = 0.4;
    return threshold;
  };

  private getChildProjects = async (collecionId: number) => {
    const type = await this.getCollectionSubunitType(collecionId);
    const result: unknown[] = [];
    if (type === 'collection') {
      const children = await this.prismaService.collection.findMany({
        select: { id: true },
        where: { parent_collection_id: collecionId },
      });
      for (const child of children) {
        result.push(await this.getChildProjects(child.id));
      }
    } else if (type === 'project') {
      const projects = await this.prismaService.project.findMany({
        where: { collection_id: collecionId },
      });
      result.push(projects);
    }

    return result.flat();
  };

  private countNumOfProjects = async (collecionId: number) => {
    const type = await this.getCollectionSubunitType(collecionId);
    let count = 0;
    if (type === 'collection') {
      const children = await this.prismaService.collection.findMany({
        select: { id: true },
        where: { parent_collection_id: collecionId },
      });
      for (const child of children) {
        count += await this.countNumOfProjects(child.id);
      }
    } else if (type === 'project') {
      const projects = await this.prismaService.project.count({
        where: { collection_id: collecionId },
      });
      count += projects;
    }

    return count;
  };

  private buildVotesMatrix = (
    votes: {
      id1: number;
      id2: number;
      picked_id: number | null;
    }[],
    allProjects: { id: number }[],
    zeroBasedMappingFunction: (i: number) => number,
  ) => {
    const n = allProjects.length;
    // an n*n zero matrix
    const matrix = generateZeroMatrix(n);

    const getVote = (i: number, j: number) =>
      votes.find(
        (vote) =>
          (vote.id1 === zeroBasedMappingFunction(i) &&
            vote.id2 === zeroBasedMappingFunction(j)) ||
          (vote.id1 === zeroBasedMappingFunction(j) &&
            vote.id2 === zeroBasedMappingFunction(i)),
      )?.picked_id === zeroBasedMappingFunction(i)
        ? 1
        : 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = getVote(i, j);
      }
    }

    return matrix;
  };

  private determineIdRanking = (
    ids: number[],
    order: 'ASC' | 'DSC' = 'ASC',
  ) => {
    // Function to count the occurrences of an element in an array
    const countOccurrences = (arr: number[], val: number) =>
      arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    // Create a map to hold the frequency of each element
    const frequencyMap: Record<number, number> = {};
    ids.forEach((i) => (frequencyMap[i] = countOccurrences(ids, i)));

    // Create an array of unique elements
    const uniqueElements = [...new Set(ids)];

    // Sort the unique elements array based on the frequency of each element
    uniqueElements.sort((a, b) =>
      order === 'ASC'
        ? frequencyMap[a] - frequencyMap[b]
        : frequencyMap[b] - frequencyMap[a],
    );

    return uniqueElements;
  };

  private validateExpertiseVote = async (
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    if (collection1Id === collection2Id)
      throw new BadRequestException(
        'Collection 1 and collection 2 ids should be different',
      );

    if (collection1Id > collection2Id)
      throw new InternalServerErrorException(
        'Conventionally, collection1Id must be less than collection2Id',
      );

    if (
      pickedId !== null &&
      pickedId !== collection1Id &&
      pickedId !== collection2Id
    )
      throw new BadRequestException('Picked collection invalid id');

    const [collection1, collection2] = await Promise.all([
      this.prismaService.collection.findFirst({ where: { id: collection1Id } }),
      this.prismaService.collection.findFirst({ where: { id: collection2Id } }),
    ]);

    if (
      !collection1 ||
      !collection2 ||
      collection1.parent_collection_id !== collection2.parent_collection_id
    )
      throw new BadRequestException('Invalid pair of collections');

    if (
      collection1.parent_collection_id !== null ||
      collection2.parent_collection_id !== null
    )
      throw new BadRequestException(
        'Expertise vote can be only done between top-level collections',
      );
  };

  private validateCollectionVote = async (
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    if (collection1Id === collection2Id)
      throw new BadRequestException(
        'Collection 1 and collection 2 ids should be different',
      );

    if (collection1Id > collection2Id)
      throw new InternalServerErrorException(
        'Conventionally, collection1Id must be less than collection2Id',
      );

    if (
      pickedId !== null &&
      pickedId !== collection1Id &&
      pickedId !== collection2Id
    )
      throw new BadRequestException('Picked collection invalid id');

    const [collection1, collection2] = await Promise.all([
      this.prismaService.collection.findFirst({ where: { id: collection1Id } }),
      this.prismaService.collection.findFirst({ where: { id: collection2Id } }),
    ]);

    if (
      !collection1 ||
      !collection2 ||
      collection1.parent_collection_id !== collection2.parent_collection_id
    )
      throw new BadRequestException('Invalid pair of collections');
  };

  private validateProjectVote = async (
    project1Id: number,
    project2Id: number,
    pickedId: number | null,
  ) => {
    if (project1Id === project2Id)
      throw new BadRequestException(
        'Project 1 and project 2 ids should be different',
      );

    if (project1Id > project2Id)
      throw new InternalServerErrorException(
        'Conventionally, project1Id must be less than project2Id',
      );

    if (pickedId !== null && pickedId !== project1Id && pickedId !== project2Id)
      throw new BadRequestException('Picked project invalid id');

    const [project1, project2] = await Promise.all([
      this.prismaService.project.findFirst({ where: { id: project1Id } }),
      this.prismaService.project.findFirst({ where: { id: project2Id } }),
    ]);

    if (
      !project1 ||
      !project2 ||
      project1.collection_id !== project2.collection_id
    )
      throw new BadRequestException('Invalid pair of projects');
  };
}
