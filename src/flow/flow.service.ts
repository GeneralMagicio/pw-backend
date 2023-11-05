import {
  BadRequestException,
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
} from 'src/utils/mathematical-logic';
import { combinations } from 'mathjs';
import {
  CollectionProgressStatus,
  CollectionRanking,
  ProjectRanking,
} from './types';
import { ProjectType } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class FlowService {
  private readonly logger = new Logger(FlowService.name);
  constructor(private readonly prismaService: PrismaService) {}

  isCollectionStarted = async (userId: number, collectionId: number) => {
    const votes = await this.prismaService.vote.findFirst({
      select: { id: true },
      where: { user_id: userId, project1: { parentId: collectionId } },
    });

    return votes !== null;
  };

  isCollectionFinished = async (userId: number, collectionId: number) => {
    const res = await this.prismaService.userCollectionFinish.findUnique({
      where: {
        user_id_collection_id: {
          collection_id: collectionId,
          user_id: userId,
        },
      },
    });
    return res !== null;
  };

  isCollectionAttested = async (userId: number, collectionId: number) => {
    const res = await this.prismaService.userAttestation.findUnique({
      where: {
        user_id_collection_id: {
          collection_id: collectionId,
          user_id: userId,
        },
      },
    });

    return res !== null;
  };

  getCollectionProgressStatus = async (
    userId: number,
    collectionId: number,
  ): Promise<CollectionProgressStatus> => {
    const isMoon = await this.isMoon(collectionId);

    if (isMoon) {
      const [isAttested, isFinished, hasVotes] = await Promise.all([
        this.isCollectionAttested(userId, collectionId),
        this.isCollectionFinished(userId, collectionId),
        this.prismaService.vote.findFirst({
          where: {
            user_id: userId,
            OR: [
              {
                project1: {
                  parentId: collectionId,
                },
              },
              {
                project2: {
                  parentId: collectionId,
                },
              },
            ],
          },
        }),
      ]);

      return isAttested
        ? 'Attested'
        : isFinished
        ? 'Finished'
        : hasVotes
        ? 'WIP'
        : 'Pending';
    } else {
      const children = await this.prismaService.project.findMany({
        select: { id: true },
        where: {
          type: 'collection',
          parentId: collectionId,
        },
      });

      const childrenFinishStatus = await Promise.all(
        children.map(async (child) =>
          this.getCollectionProgressStatus(userId, child.id),
        ),
      );

      if (childrenFinishStatus.every((child) => child === 'Finished'))
        return 'Finished';
      if (childrenFinishStatus.some((child) => child === 'Finished'))
        return 'WIP';
      return 'Pending';
    }
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

  isCollectionTopLevel = async (collectionId: number) => {
    const res = await this.prismaService.project.findFirst({
      select: { id: true },
      where: {
        parentId: null,
        id: collectionId,
        type: ProjectType.collection,
      },
    });

    return res !== null;
  };

  getOverallRanking = async (
    userId: number,
    cid: number | null = null,
  ): Promise<(CollectionRanking | ProjectRanking)[]> => {
    let result = [];
    const [collection, collections] = await Promise.all([
      this.prismaService.project.findUnique({
        where: { id: cid || -1 },
      }),
      this.prismaService.project.findMany({
        select: { id: true, name: true, type: true, RPGF3Id: true },
        where: {
          parentId: cid,
          type: { in: [ProjectType.composite_project, ProjectType.collection] },
        },
      }),
      // this.prismaService.userCollectionFinish.findMany({
      //   select: { collection_id: true },
      //   where: {
      //     user_id: userId,
      //     collection: {
      //       parentId: cid,
      //     },
      //   },
      // }),
    ]);

    const ranking = await this.getRanking(userId, cid);

    if (collections.length === 0) {
      result = ranking.map(({ name, id, share, type, RPGF3Id }) => ({
        name,
        id,
        share,
        RPGF3Id: RPGF3Id || '',
        type: type as 'project',
        hasRanking: false as const,
      }));
      return result;
    }

    const res = await Promise.all([
      ...collections.map(async ({ type, id, name, RPGF3Id }) => ({
        type: type as 'collection' | 'composite project',
        id,
        name,
        RPGF3Id: RPGF3Id || '',
        hasRanking: true as const,
        isTopLevel: await this.isCollectionTopLevel(id),
        progress: await this.getCollectionProgressStatus(userId, id),
        // isFinished: !!areFinished.find((el) => el.collection_id === id),
        share: ranking.find((c) => c.id === id)!.share,
        ranking: [
          ...(await this.getOverallRanking(
            userId,
            id,
            // ranking.find((c) => c.id === id)!.share,
          )),
        ],
      })),
      ...ranking
        .filter((el) => el.type === 'project')
        .map(({ name, id, type, share, RPGF3Id }) => ({
          name,
          id,
          RPGF3Id: RPGF3Id || '',
          hasRanking: false as const,
          share: share,
          type: type as 'project',
        })),
    ]);

    return res.sort((a, b) => b.share - a.share);
  };

  addManyShares = async (
    shares: { id: number; share: number }[],
    userId: number,
  ) => {
    // TODO: Is the array in .all method redundant?
    return Promise.all([
      shares.map(async ({ id, share }) => {
        return this.prismaService.share.upsert({
          update: { share: share },
          create: { user_id: userId, project_id: id, share: share },
          where: {
            user_id_project_id: {
              user_id: userId,
              project_id: id,
            },
          },
        });
      }),
    ]);
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
        const [hasSubcollections, progress] = await Promise.all([
          this.hasSubcollections(collection.id),
          this.getCollectionProgressStatus(userId, collection.id),
          // this.isCollectionStarted(userId, collection.id),
        ]);
        return {
          ...collection,
          hasSubcollections,
          progress,
          // started,
        };
      }),
    );
    return withAdditionalFields;
  };

  getCollectionVotingPower = async (
    collectionId: number | null,
    userId: number,
  ): Promise<number> => {
    if (collectionId === null) return 1;

    const collection = await this.prismaService.project.findUnique({
      where: {
        id: collectionId,
        type: { in: [ProjectType.collection, ProjectType.composite_project] },
      },
      select: { parentId: true },
    });

    if (!collection) throw Error('No such collection or composite project');

    const savedResult = await this.prismaService.share.findFirst({
      where: { project_id: collectionId, user_id: userId },
    });

    if (!savedResult) throw Error('No corresponding value for the collection');

    return savedResult.share;

    // const ranking = await this.getRankingFromVotes(userId, collection.parentId);

    // const { share } = ranking.find((item) => item.id === collectionId)!;

    // if (collection.parentId === null) {
    //   return share;
    // } else {
    //   return (
    //     (await this.getCollectionVotingPower(collection.parentId, userId)) *
    //     share
    //   );
    // }
  };
  isMoon = async (collectionId: number | null) => {
    const isMoon = await this.prismaService.project.findFirst({
      where: {
        parentId: collectionId,
        type: 'collection',
      },
    });

    return isMoon === null ? true : false;
  };

  saveResultsFromVotes = async (
    userId: number,
    collectionId: number | null,
  ) => {
    const [ranking, votingPower] = await Promise.all([
      this.getRankingFromVotes(userId, collectionId),
      this.getCollectionVotingPower(collectionId, userId),
    ]);

    await Promise.all(
      ranking.map((rank) => {
        const share = rank.share * votingPower;
        return this.prismaService.share.upsert({
          update: { share },
          create: {
            user_id: userId,
            project_id: rank.id,
            share,
          },
          where: {
            user_id_project_id: {
              user_id: userId,
              project_id: rank.id,
            },
          },
        });
      }),
    );
    // await this.prismaService.share.createMany({
    //   data: ranking.map((rank) => ({
    //     user_id: userId,
    //     project_id: rank.id,
    //     share: rank.share,
    //   })),
    //   // update: { share: rank.share },
    //   // data: { user_id: userId, project_id: rank.id, share: rank.share },
    //   // where: {
    //   //   user_id_project_id: {
    //   //     user_id: userId,
    //   //     project_id: rank.id,
    //   //   },
    //   // },
    // });

    // if (!(await this.checkRankingIntegrityInDb(userId)))
    //   throw new BadRequestException('Ranking lacks integrity');
  };

  /**
   * This method calculates ranking in a collection/composite project based on the votes
   * @param userId
   * @param collectionId
   * @returns
   */
  private getRankingFromVotes = async (
    userId: number,
    // id of the collection or the composite project
    collectionId: number | null,
  ) => {
    const [allVotes, allChildren] = await Promise.all([
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

    const winningProjects = allChildren.filter(
      (project) =>
        allVotes.some((vote) => vote.picked_id === project.id) === true,
    );

    const winningProjectsIds = winningProjects.map((el) => el.id);
    const nonWinningProjectsIds = allChildren
      .filter((project) => !winningProjectsIds.includes(project.id))
      .map((el) => el.id);

    const votesForWinningProjects = allVotes.filter(
      (vote) =>
        winningProjectsIds.includes(vote.project1_id) &&
        winningProjectsIds.includes(vote.project2_id),
    );

    const mappingObject: Record<number, number> = winningProjects.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const matrix = this.buildVotesMatrix(
      votesForWinningProjects.map(
        ({ project1_id, project2_id, picked_id }) => ({
          id1: project1_id,
          id2: project2_id,
          picked_id: picked_id,
        }),
      ),
      winningProjects.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const ranking = [
      ...result.map((item, index) => {
        const project = winningProjects.find(
          (el) => el.id === zeroBasedMappingFunction(index),
        );
        return {
          id: project!.id,
          share: item,
          name: project!.name,
          type: project!.type,
          RPGF3Id: project!.RPGF3Id,
        };
      }),
      ...nonWinningProjectsIds.map((id) => {
        const project = allChildren.find((el) => el.id === id);
        return {
          id: project!.id,
          share: 0,
          name: project!.name,
          type: project!.type,
          RPGF3Id: project!.RPGF3Id,
        };
      }),
    ];

    return makeIt100(ranking.sort((a, b) => b.share - a.share));
  };

  /**
   * This method calculates ranking in a collection/composite project either by votes or saved results
   * @param userId
   * @param collectionId
   * @returns
   */
  getRanking = async (
    userId: number,
    // id of the collection or the composite project
    collectionId: number | null,
  ) => {
    const savedResults = await this.prismaService.share.findMany({
      where: { project: { parentId: collectionId }, user_id: userId },
      include: { project: true },
    });

    return savedResults
      .map((item) => ({
        id: item.project_id,
        name: item.project.name,
        share: item.share,
        type: item.project.type,
        RPGF3Id: item.project.RPGF3Id,
        hasRanking: false,
      }))
      .sort((a, b) => b.share - a.share);
  };

  getPairs = async (userId: number, parentCollection?: number, count = 1) => {
    const [collection, allVotes, allChildren] = await Promise.all([
      this.prismaService.project.findUnique({
        where: {
          id: parentCollection || -1,
          type: { in: [ProjectType.collection, ProjectType.composite_project] },
        },
        select: { name: true, id: true },
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
        name: collection?.name || 'Root',
        threshold: this.calculateThreshold(
          allIds.length,
          collection?.id || null,
        ),
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
      name: collection?.name || 'Root',
      threshold: this.calculateThreshold(allIds.length, collection?.id || null),
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

    const threshold = this.calculateThreshold(count, collection.id);

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

  private formatRanking = (ranking: CollectionRanking['ranking']) => {
    return ranking.map((el) => ({
      id: el.id,
      share: el.share,
      name: el.name,
    }));
  };

  breakOverallRankingDown = (input: CollectionRanking) => {
    // const overallRanking: CollectionRanking = JSON.parse(
    //   JSON.stringify(input),
    // );
    const lists: { id: number; ranking: ProjectRanking[] }[] = [];

    // console.log(input.ranking);
    // console.log('Going for format ranking:', input);
    lists.push({
      id: input.id,
      ranking: this.formatRanking(input.ranking) as ProjectRanking[],
    });

    for (let i = 0; i < input.ranking.length; i++) {
      const row = input.ranking[i];
      if (row.type !== 'project' && row.hasRanking) {
        // if lists.push(...this.breakOverallRankingDown(row));
        if (row.ranking.some((p) => p.type !== 'project')) {
          lists.push(...this.breakOverallRankingDown(row));
        } else
          lists.push({
            id: row.id,
            ranking: this.formatRanking(row.ranking) as ProjectRanking[],
          });
      }
    }

    return lists;
  };

  populateInitialRanking = async (userId: number) => {
    const [entities, projectsCount] = await Promise.all([
      this.prismaService.project.findMany({
        select: { id: true, type: true, name: true },
      }),
      this.prismaService.project.count({
        where: { type: 'project' },
      }),
    ]);

    const total = projectsCount;

    const projects = entities.filter((el) => el.type === 'project');

    const collections = entities.filter((el) => el.type !== 'project');

    await this.prismaService.share.createMany({
      data: projects.map((item) => ({
        share: 1 / total,
        user_id: userId,
        project_id: item.id,
      })),
    });

    for (const item of collections) {
      const childrenCount = await this.countNumOfProjects(item.id);
      await this.prismaService.share.create({
        data: {
          share: childrenCount / total,
          user_id: userId,
          project_id: item.id,
        },
      });
    }
  };

  allSiblingsExist = async (
    data: {
      id: number;
      ranking: ProjectRanking[];
    }[],
  ) => {
    const valid = await Promise.all(
      data.map(async (list) => {
        const listId = list.id === -1 ? null : list.id;
        const numOfChildren = await this.prismaService.project.count({
          where: { parentId: listId },
        });

        if (
          numOfChildren !== new Set(list.ranking.map((item) => item.id)).size
        ) {
          throw new BadRequestException(
            'All sibling projects should co-exist in the list',
          );
        }

        const areValidIds = await Promise.all(
          list.ranking.map(async (el) => {
            const res = await this.prismaService.project.findUnique({
              select: { parentId: true },
              where: { id: el.id },
            });

            return res?.parentId === listId;
          }),
        );

        return !areValidIds.some((val) => val === false);
      }),
    );

    return !valid.some((val) => val === false);
  };

  private hasSubcollections = async (collectionId: number) => {
    const subCollections = await this.prismaService.project.count({
      where: {
        parentId: collectionId,
        type: { in: [ProjectType.collection, ProjectType.composite_project] },
      },
    });

    return subCollections > 0;
  };

  private calculateThreshold = (count: number, collectionId: number | null) => {
    if (collectionId === null || count < 7) return 0.4;
    const threshold = 1 / (count - 1);
    return threshold;
  };

  private getChildProjects = async (collectionId: number) => {
    const result: unknown[] = [];
    const children = await this.prismaService.project.findMany({
      select: { id: true, type: true, image: true, name: true },
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

  pinJSONToIPFS = async (list: object) => {
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      {
        pinataContent: list,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.PINATA,
        },
      },
    );
    return res.data.IpfsHash;
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
