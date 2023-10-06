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
  makeIt100,
  toFixedNumber,
} from 'src/utils/mathematical-logic';
import { combinations } from 'mathjs';
import { CollectionService } from 'src/collection/collection.service';
import { CollectionRanking } from './types';
import { OverallRankingType } from 'src/utils/edit-logic';
import { ProjectType } from '@prisma/client';

@Injectable()
export class FlowService {
  private readonly logger = new Logger(FlowService.name);
  constructor(private readonly prismaService: PrismaService) {}

  // This would determine the latest collection a user has voted in
  // So they can pick up where they've left off
  determineResumeVoting = async (userId: number) => {
    const [latestProjectVote, latestExpertiseVote] = await Promise.all([
      this.prismaService.vote.findFirst({
        where: { user_id: userId },
        orderBy: { updated_at: 'desc' },
        include: { project1: true },
      }),
      this.prismaService.expertiseVote.findFirst({
        where: { user_id: userId },
        orderBy: { updated_at: 'desc' },
        include: { collection1: true },
      }),
    ]);

    // No votes whatsoever
    if (!latestProjectVote && !latestExpertiseVote) return -1;

    if (
      latestProjectVote &&
      latestProjectVote.updated_at > (latestExpertiseVote?.updated_at || 0)
    )
      return {
        type: 'project',
        collectionId: latestProjectVote.project1.parentId,
      };

    if (
      latestExpertiseVote &&
      latestExpertiseVote.updated_at > (latestProjectVote?.updated_at || 0)
    )
      return {
        type: 'expertise',
        collectionId: latestExpertiseVote.collection1.parentId,
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
      this.prismaService.project.findMany({
        where: { type: ProjectType.collection, parentId: null },
      }),
    ]);

    return (
      expertiseVotes.length >
      Math.floor(
        this.calculateThreshold(topLevelCollections.length, true) *
          combinations(topLevelCollections.length, 2),
      )
    );
  };

  hasAnsweredImpact = async (userId: number) => {
    const [topLevelVotes, topLevelCollections] = await Promise.all([
      this.prismaService.vote.findMany({
        where: {
          user_id: userId,
          project1: { parentId: null },
          project2: { parentId: null },
        },
      }),
      this.prismaService.project.findMany({
        where: { parentId: null },
      }),
    ]);

    return (
      topLevelVotes.length >
      Math.floor(
        this.calculateThreshold(topLevelCollections.length, true) *
          combinations(topLevelCollections.length, 2),
      )
    );
  };

  isCollectionStarted = async (userId: number, collectionId: number) => {
    const votes = await this.prismaService.vote.findFirst({
      select: { id: true },
      where: { user_id: userId, project1: { parentId: collectionId } },
    });

    return votes !== null;
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

    const collection = await this.prismaService.project.findUnique({
      where: { id: collectionId, type: ProjectType.project },
      include: { parent: true },
    });

    if (!collection) throw new Error('Collection id invalid');

    const isTopLevel = collection.parent === null;

    if (!isTopLevel) {
      const [isParentLocked, isParentFinished] = await Promise.all([
        this.isCollectionLocked(userId, collection.parentId!),
        this.isCollectionFinished(userId, collection.parentId!),
      ]);

      return !isParentFinished || isParentLocked;
    }

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

  private vote = async (
    userId: number,
    project1Id: number,
    project2Id: number,
    pickedId: number | null,
  ) => {
    // await this.validateProjectVote(project1Id, project2Id, pickedId);
    const payload = {
      user_id: userId,
      project1_id: project1Id,
      project2_id: project2Id,
      picked_id: pickedId,
    };
    const vote = await this.prismaService.vote.findFirst({
      where: { ...payload, picked_id: undefined },
    });
    if (vote) {
      await this.prismaService.vote.update({
        data: payload,
        where: { id: vote.id },
      });
    } else {
      await this.prismaService.vote.create({
        data: payload,
      });
    }
  };

  voteForProjects = async (
    userId: number,
    project1Id: number,
    project2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateVote(project1Id, project2Id, pickedId);
    await this.vote(userId, project1Id, project2Id, pickedId);
  };

  getOverallRanking = async (
    userId: number,
    cid: number | null = null,
    coefficient = 1,
  ): Promise<OverallRankingType[]> => {
    const editedRanking = await this.prismaService.editedRanking.findFirst({
      select: { ranking: true },
      where: {
        user_id: userId,
        collection_id: null,
      },
    });

    if (editedRanking) return JSON.parse(editedRanking.ranking);

    let result = [];
    const collections = await this.prismaService.project.findMany({
      select: { id: true, name: true },
      where: {
        parentId: cid,
        type: { in: [ProjectType.composite_project, ProjectType.collection] },
      },
    });

    const res = await this.getRanking(userId, cid);

    const { ranking } = res;

    if (collections.length === 0) {
      result = ranking.map((item) => ({
        name: item.project?.name,
        id: item.project?.id,
        share: toFixedNumber(item.share * coefficient, 4),
        type: item.project?.type,
      }));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return result;
    }

    return Promise.all(
      collections.map(async (collection) => ({
        type: 'collection',
        id: collection.id,
        collectionTitle: collection.name,
        share:
          coefficient *
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ranking.find((c) => c.project.id === collection.id).share,
        ranking: await this.getOverallRanking(
          userId,
          collection.id,
          coefficient *
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ranking.find((c) => c.project.id === collection.id).share,
        ),
      })),
    );
  };

  voteForExpertise = async (
    userId: number,
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateExpertiseVote(collection1Id, collection2Id, pickedId);
    await this.vote(userId, collection1Id, collection2Id, pickedId);
  };

  voteForCollections = async (
    userId: number,
    collection1Id: number,
    collection2Id: number,
    pickedId: number | null,
  ) => {
    await this.validateVote(collection1Id, collection2Id, pickedId);
    await this.vote(userId, collection1Id, collection2Id, pickedId);
  };

  getCollections = async (
    userId: number,
    parentCollectionId: number | null,
  ) => {
    const collections = await this.prismaService.project.findMany({
      where: {
        parentId: parentCollectionId,
        type: { in: [ProjectType.composite_project, ProjectType.collection] },
      },
    });

    const withAdditionalFields = await Promise.all(
      collections.map(async (collection) => {
        const [locked, hasSubcollections, finished, started] =
          await Promise.all([
            this.isCollectionLocked(userId, collection.id),
            this.hasSubcollections(collection.id),
            this.isCollectionFinished(userId, collection.id),
            this.isCollectionStarted(userId, collection.id),
          ]);
        return {
          ...collection,
          locked,
          hasSubcollections,
          finished,
          started,
        };
      }),
    );
    return withAdditionalFields;
  };

  getNextCollection = async (
    userId: number,
    parentId?: number | null,
  ): Promise<number | null> => {
    const lastFinishedCollection = (
      await this.prismaService.userCollectionFinish.findFirst({
        where: {
          user_id: userId,
          collection: parentId !== undefined ? { parentId } : undefined,
        },
        include: { collection: { include: { parent: true } } },
        orderBy: { updated_at: 'desc' },
      })
    )?.collection;

    if (!lastFinishedCollection) return null;

    if (lastFinishedCollection.parentId === null)
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
            parentId: lastFinishedCollection.parentId,
          },
        },
      });

    const unFinishedSiblings = await this.prismaService.project.findMany({
      where: {
        type: ProjectType.collection,
        parentId: lastFinishedCollection.parentId,
        id: { notIn: finishedSiblings.map((item) => item.collection_id) },
      },
    });

    if (unFinishedSiblings.length > 0) return unFinishedSiblings[0].id;

    const grandparentId = lastFinishedCollection?.parent?.parentId;

    // If not, Go to the sibling of the parent (recursive)
    if (unFinishedSiblings.length === 0 && grandparentId !== undefined) {
      return this.getNextCollection(userId, grandparentId);
    }

    return null;
  };

  getCollectionVotingPower = async (
    collectionId: number,
    userId: number,
  ): Promise<number> => {
    const collection = await this.prismaService.project.findUnique({
      where: { id: collectionId, type: ProjectType.collection },
      select: { parentId: true },
    });

    if (!collection) throw Error('');

    const ranking = await this.getRanking(userId, collection.parentId);

    const { share } = ranking.ranking.find(
      (item) => item.project?.id === collectionId,
    )!;

    if (collection.parentId === null) {
      return share;
    } else {
      return (
        (await this.getCollectionVotingPower(collection.parentId, userId)) *
        share
      );
    }
  };

  getRanking = async (
    userId: number,
    // id of the collection or the composite project
    collectionId: number | null,
  ) => {
    // const editedRanking = await this.prismaService.editedRanking.findFirst({
    //   select: { ranking: true },
    //   where: {
    //     user_id: userId,
    //     collection_id: collectionId,
    //   },
    // });

    // if (editedRanking) return JSON.parse(editedRanking.ranking);

    const [collection, allVotes, allChildren] = await Promise.all([
      this.prismaService.project.findUnique({
        where: { id: collectionId || -1, type: ProjectType.collection },
        select: { name: true },
      }),
      this.prismaService.vote.findMany({
        where: {
          user_id: userId,
          project1: { parentId: collectionId },
          project2: { parentId: collectionId },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          parentId: collectionId,
        },
      }),
    ]);

    const mappingObject: Record<number, number> = allChildren.reduce(
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
      allChildren.map(({ id }) => ({ id })),
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ranking: makeIt100(ranking.sort((a, b) => b.share - a.share)),
    };
  };

  getExpertiseRanking = async (userId: number) => {
    const [allVotes, allCollections] = await Promise.all([
      this.prismaService.expertiseVote.findMany({
        where: {
          user_id: userId,
          collection1: { parentId: null },
          collection2: { parentId: null },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          type: ProjectType.collection,
          parentId: null,
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
        project: await this.prismaService.project.findUnique({
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

  getPairs = async (userId: number, parentCollection?: number, count = 5) => {
    const [collection, allVotes, allChildren] = await Promise.all([
      this.prismaService.project.findUnique({
        where: {
          id: parentCollection || -1,
          type: { in: [ProjectType.collection, ProjectType.composite_project] },
        },
        select: { name: true },
      }),
      this.prismaService.vote.findMany({
        where: {
          user_id: userId,
          project1: { parentId: parentCollection },
          project2: { parentId: parentCollection },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          parentId: parentCollection,
        },
      }),
    ]);

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.project1_id, vote.project2_id],
      [] as number[],
    );

    const allIds = allChildren.map((child) => child.id);

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
          (vote.project1_id === px && vote.project2_id === py) ||
          (vote.project1_id === py && vote.project2_id === px),
      );

      if (index === -1) result.push(combination);

      i++;
    }

    const res = await Promise.all(
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
          collection1: { parentId: parentCollection },
          collection2: { parentId: parentCollection },
        },
      }),
      this.prismaService.project.findMany({
        where: {
          type: ProjectType.collection,
          parentId: parentCollection,
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

  hasThresholdVotes = async (
    collectionId: number,
    userId: number,
  ): Promise<boolean> => {
    // const type = await this.getCollectionSubunitType(collectionId);
    const collection = await this.prismaService.project.findUnique({
      where: {
        id: collectionId,
        type: { in: [ProjectType.collection, ProjectType.composite_project] },
      },
      include: {
        children: true,
      },
    });
    if (!collection) throw new BadRequestException('Collection id invalid');

    const { children } = collection;

    const count = children.length;

    const threshold = this.calculateThreshold(
      count,
      children[0].type === ProjectType.collection,
    );

    let numOfVotes = 0;

    numOfVotes = await this.prismaService.vote.count({
      where: {
        user_id: userId,
        project1: { parentId: collectionId },
        project2: { parentId: collectionId },
      },
    });

    return numOfVotes / combinations(count, 2) >= threshold;
  };

  // calculateOverallProgress = async (userId: number) => {
  //   const [allCollections, finishedCollections] = await Promise.all([
  //     this.prismaService.collection.findMany(),
  //     this.prismaService.userCollectionFinish.findMany({
  //       where: { user_id: userId },
  //     }),
  //   ]);

  //   return Math.ceil(
  //     (finishedCollections.length / allCollections.length) * 100,
  //   );
  // };

  private hasSubcollections = async (collectionId: number) => {
    const subCollections = await this.prismaService.project.count({
      where: {
        parentId: collectionId,
        type: { in: [ProjectType.collection, ProjectType.composite_project] },
      },
    });

    return subCollections > 0;
  };

  // private hasCompositeProjects = async (collectionId: number) => {
  //   const compositeProjects = await this.prismaService.project.count({
  //     where: {
  //       type: ProjectType.composite_project,
  //       parent: { parentId: collectionId },
  //     },
  //   });

  //   return compositeProjects > 0;
  // };

  private calculateThreshold = (count: number, forceAll = false) => {
    if (forceAll) return 0.4;
    const threshold = 0.25;
    return threshold;
  };

  private getChildProjects = async (collectionId: number) => {
    const result: unknown[] = [];
    const children = await this.prismaService.project.findMany({
      select: { id: true, type: true },
      where: { parentId: collectionId },
    });
    for (const child of children) {
      if (child.type === 'project') result.push(child);
      else result.push(await this.getChildProjects(child.id));
    }

    return result.flat();
  };

  private countNumOfProjects = async (collectionId: number) => {
    let count = 0;
    const children = await this.prismaService.project.findMany({
      select: { id: true, type: true },
      where: { parentId: collectionId },
    });
    for (const child of children) {
      if (child.type === 'project') count += 1;
      else count += await this.countNumOfProjects(child.id);
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
      this.prismaService.project.findFirst({
        where: { id: collection1Id, type: ProjectType.collection },
      }),
      this.prismaService.project.findFirst({
        where: { id: collection2Id, type: ProjectType.collection },
      }),
    ]);

    if (
      !collection1 ||
      !collection2 ||
      collection1.parentId !== collection2.parentId
    )
      throw new BadRequestException('Invalid pair of collections');

    if (collection1.parentId !== null || collection2.parentId !== null)
      throw new BadRequestException(
        'Expertise vote can be only done between top-level collections',
      );
  };

  private formatProjectRankingForOverallRanking = (
    input: CollectionRanking,
    share: number,
    id: number,
  ) => {
    const newRanking = input.ranking.map((item) => ({
      id: item.project?.id,
      share: item.share * share,
      name: item.project?.name,
      type: 'project',
    }));

    return {
      collectionTitle: input.collectionTitle,
      ranking: newRanking,
      share,
      id,
      type: 'composite project',
    };
  };

  private validateVote = async (
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
      this.prismaService.project.findFirst({
        where: { id: project1Id },
      }),
      this.prismaService.project.findFirst({
        where: { id: project2Id },
      }),
    ]);

    if (!project1 || !project2 || project1.parentId !== project2.parentId)
      throw new BadRequestException('Invalid pair of projects');
  };
}
