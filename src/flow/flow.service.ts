import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { getPairwiseCombinations, sortCombinations } from 'src/utils';
import {
  generateZeroMatrix,
  getRankingForSetOfDampingFactors,
} from 'src/utils/mathematical-logic';
import { combinations } from 'mathjs';
import {
  CollectionProgressStatus,
  CollectionRanking,
  ProjectRanking,
} from './types';
import { InclusionState, ProjectType } from '@prisma/client';
import axios from 'axios';
import * as fs from 'fs';
import * as FormData from 'form-data';
import { BadgeData } from 'src/utils/badges/readBadges';

@Injectable()
export class FlowService {
  private readonly logger = new Logger(FlowService.name);
  constructor(private readonly prismaService: PrismaService) {}

  isCollectionStarted = async (userId: number, collectionId: number) => {
    const votes = await this.prismaService.vote.findFirst({
      select: { id: true },
      where: { userId: userId, project1: { parentId: collectionId } },
    });

    return votes !== null;
  };

  isCollectionFinished = async (userId: number, collectionId: number) => {
    const res = await this.prismaService.userCollectionFinish.findUnique({
      where: {
        userId_collectionId: {
          collectionId: collectionId,
          userId: userId,
        },
      },
    });
    return res !== null;
  };

  isCollectionAttested = async (userId: number, collectionId: number) => {
    const res = await this.prismaService.userAttestation.findUnique({
      where: {
        userId_collectionId: {
          collectionId: collectionId,
          userId: userId,
        },
      },
    });

    return res !== null;
  };

  getCollectionProgressStatus = async (
    userId: number,
    collectionId: number,
  ): Promise<CollectionProgressStatus> => {
    const isLastLayerCollection = await this.isLastLayerCollection(
      collectionId,
    );

    if (isLastLayerCollection) {
      const [
        isAttested,
        isFinished,
        hasThresholdVotes,
        hasVotes,
        isFiltered,
        inclusion,
      ] = await Promise.all([
        this.isCollectionAttested(userId, collectionId),
        this.isCollectionFinished(userId, collectionId),
        this.hasThresholdVotes(collectionId, userId),
        this.isCollectionStarted(userId, collectionId),
        this.isCollectionFiltered(userId, collectionId),
        this.prismaService.projectInclusion.findFirst({
          where: { userId, project: { parentId: collectionId } },
        }),
      ]);

      const isFiltering = inclusion !== null;

      return isAttested
        ? 'Attested'
        : isFinished
        ? 'Finished'
        : hasThresholdVotes
        ? 'WIP - Threshold'
        : hasVotes
        ? 'WIP'
        : isFiltered
        ? 'Filtered'
        : isFiltering
        ? 'Filtering'
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

      if (
        childrenFinishStatus.every(
          (child) => child === 'Finished' || child === 'Attested',
        )
      )
        return 'Finished';
      if (
        childrenFinishStatus.some(
          (child) => child === 'Finished' || child === 'Attested',
        )
      )
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
      userId: userId,
      project1Id: project1Id,
      project2Id: project2Id,
      pickedId: pickedId,
    };
    const vote = await this.prismaService.vote.findFirst({
      where: { ...payload, pickedId: undefined },
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
    await this.validateProjectVotes(userId, project1Id, project2Id, pickedId);
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

  setInclusionStateBulk = async (
    ids: number[],
    userId: number,
    cid: number,
  ) => {
    const projects = await this.prismaService.$transaction(
      ids.map((id) =>
        this.prismaService.project.findUnique({
          where: { id },
          select: { parentId: true },
        }),
      ),
    );

    const parentId = projects[0]?.parentId;

    const tempMinimum = await this.getMinimumIncludedProjects(cid);

    if (ids.length === 0)
      throw new HttpException(
        {
          error: `You need to include at least ${tempMinimum} projects`,
          pwCode: 'pw1000',
          minimum: tempMinimum,
        },
        HttpStatus.FORBIDDEN,
      );

    if (new Set(projects.map((el) => el?.parentId)).size !== 1 || !parentId)
      throw new BadRequestException(
        'All projects should share the same parent',
      );

    // Since we're not sure the cid passed by the user is indeed the parentId, we fetch
    // the minimum inclusion number again
    const minimumInclusion = await this.getMinimumIncludedProjects(parentId);

    if (new Set(ids).size < minimumInclusion)
      throw new HttpException(
        {
          error: `You need to include at least ${minimumInclusion} projects`,
          pwCode: 'pw1000',
          minimum: minimumInclusion,
        },
        HttpStatus.FORBIDDEN,
      );

    const [allProjects, ranks] = await Promise.all([
      this.prismaService.project.findMany({
        select: { id: true },
        where: { parentId },
      }),
      this.prismaService.rank.findFirst({
        where: {
          project: { parentId },
          userId,
          rank: { gt: 0 },
        },
      }),
    ]);

    if (ranks) {
      const promises = allProjects.map((item) =>
        this.prismaService.rank.update({
          where: { userId_projectId: { projectId: item.id, userId } },
          data: { rank: null },
        }),
      );

      await Promise.all(promises);
    }

    // const allProjects = await this.prismaService.project.findMany({
    //   select: { id: true },
    //   where: { parentId },
    // });

    const excludedProjects = allProjects
      .map((el) => el.id)
      .filter((item) => !ids.includes(item));

    await Promise.all(
      ids.map((id) => this.setInclusionState(userId, id, 'included')),
    );

    await Promise.all(
      excludedProjects.map((id) =>
        this.setInclusionState(userId, id, 'excluded'),
      ),
    );
  };

  setInclusionState = async (
    userId: number,
    projectId: number,
    state: InclusionState,
  ) => {
    const parent = await this.prismaService.project.findFirst({
      select: { id: true },
      where: {
        type: 'collection',
        children: {
          some: {
            id: projectId,
          },
        },
      },
    });
    if (!parent)
      throw new UnprocessableEntityException(
        "The project doesn't have a valid parent (or doesn't exist at all)",
      );

    // Comment because of filtering ability in the DnD page

    // const status = await this.getCollectionProgressStatus(userId, parent.id);

    // if (status !== 'Filtering' && status !== 'Pending')
    //   throw new BadRequestException(
    //     'Inclusion states in a filtered collection can not be modified',
    //   );

    const [inclusionState, siblingExclusions, allChildren] = await Promise.all([
      this.prismaService.projectInclusion.findUnique({
        select: { state: true },
        where: {
          userId_projectId: {
            userId,
            projectId,
          },
        },
      }),
      this.prismaService.projectInclusion.count({
        where: {
          userId,
          project: {
            parentId: parent.id,
          },
          state: 'excluded',
        },
      }),
      this.prismaService.project.count({
        where: {
          parentId: parent.id,
        },
      }),
    ]);

    const minimumInclusion = await this.getMinimumIncludedProjects(parent.id);

    if (
      siblingExclusions === allChildren - minimumInclusion &&
      state === 'excluded' &&
      (!inclusionState || inclusionState.state === 'included')
    )
      throw new HttpException(
        {
          error: `You need to include at least ${minimumInclusion} projects`,
          pwCode: 'pw1000',
          minimum: minimumInclusion,
        },
        HttpStatus.FORBIDDEN,
      );

    const project = await this.prismaService.projectInclusion.upsert({
      where: {
        userId_projectId: {
          projectId,
          userId,
        },
      },
      create: {
        projectId,
        userId,
        state,
      },
      update: {
        state,
      },
      include: {
        project: true,
      },
    });

    if (project.project.type !== 'project') {
      await this.prismaService.projectInclusion.delete({
        where: {
          userId_projectId: {
            projectId,
            userId,
          },
        },
      });
      throw new BadRequestException('Only projects can be filtered');
    }
  };

  markCollectionsFiltered = async (userId: number, collectionId: number) => {
    const [includedProjects, excludedProjects, projects] = await Promise.all([
      this.prismaService.projectInclusion.findMany({
        select: { projectId: true },
        where: {
          project: { parentId: collectionId },
          userId,
          state: 'included',
        },
      }),
      this.prismaService.projectInclusion.findMany({
        select: { projectId: true },
        where: {
          project: { parentId: collectionId },
          userId,
          state: 'excluded',
        },
      }),
      this.prismaService.projectInclusion.findMany({
        select: { projectId: true },
        where: {
          project: { parentId: collectionId },
          userId,
        },
      }),
    ]);

    if (includedProjects.length < 2)
      throw new ForbiddenException(
        'You must at least include 2 projects in your selection',
      );

    const filteredCollection =
      await this.prismaService.userCollectionFiltered.upsert({
        where: {
          userId_collectionId: {
            userId,
            collectionId,
          },
        },
        create: {
          collectionId,
          userId,
        },
        update: {
          collectionId,
          userId,
        },
        include: {
          collection: true,
        },
      });

    if (filteredCollection.collection.type !== 'collection') {
      await this.prismaService.userCollectionFiltered.delete({
        where: {
          userId_collectionId: {
            collectionId,
            userId,
          },
        },
      });
      throw new BadRequestException('Only collections can be marked filtered');
    }

    if (projects.length !== includedProjects.length + excludedProjects.length)
      throw new ForbiddenException(
        'All projects should be marked either included or excluded',
      );

    // const collectionVotingPower = await this.getCollectionVotingPower(
    //   collectionId,
    //   userId,
    // );

    // const share = collectionVotingPower / includedProjects.length;

    await this.prismaService.rank.updateMany({
      where: {
        userId,
        projectId: { in: projects.map((item) => item.projectId) },
      },
      data: { rank: null },
    });

    await this.prismaService.$transaction(
      includedProjects.map((el, index) =>
        this.prismaService.rank.update({
          where: {
            userId_projectId: {
              userId,
              projectId: el.projectId,
            },
          },
          data: { rank: index + 1 },
        }),
      ),
    );
  };

  getOverallRanking = async (
    userId: number,
    cid: number | null = null,
  ): Promise<(CollectionRanking | ProjectRanking)[]> => {
    let result = [];
    const collections = await this.prismaService.project.findMany({
      select: { id: true, name: true, type: true, RPGF4Id: true },
      where: {
        parentId: cid,
        type: { in: [ProjectType.compositeProject, ProjectType.collection] },
      },
    });

    const ranking = await this.getRanking(userId, cid);

    // collection is top level and only contain projects
    if (collections.length === 0) {
      result = ranking.map(({ name, id, rank, type, RPGF4Id }) => ({
        name,
        id,
        rank,
        RPGF4Id: RPGF4Id || '',
        type: type as 'project',
        hasRanking: false as const,
      }));
      return result;
    }

    const res = await Promise.all([
      ...collections.map(async ({ type, id, name, RPGF4Id }) => ({
        type: type as 'collection' | 'composite project',
        id,
        name,
        RPGF4Id: RPGF4Id || '',
        hasRanking: true as const,
        isTopLevel: await this.isCollectionTopLevel(id),
        progress: await this.getCollectionProgressStatus(userId, id),
        // isFinished: !!areFinished.find((el) => el.collectionId === id),
        rank: ranking.find((c) => c.id === id)!.rank,
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
        .map(({ name, id, type, rank, RPGF4Id }) => ({
          name,
          id,
          RPGF4Id: RPGF4Id || '',
          hasRanking: false as const,
          rank,
          type: type as 'project',
        })),
    ]);

    return res.sort((a, b) => a.rank - b.rank);
  };

  // addManyShares = async (
  //   shares: { id: number; share: number }[],
  //   userId: number,
  // ) => {
  //   // TODO: Is the array in .all method redundant?
  //   return Promise.all([
  //     shares.map(async ({ id, share }) => {
  //       return this.prismaService.share.upsert({
  //         update: { share: share },
  //         create: { userId: userId, projectId: id, share: share },
  //         where: {
  //           userId_projectId: {
  //             userId: userId,
  //             projectId: id,
  //           },
  //         },
  //       });
  //     }),
  //   ]);
  // };

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
        type: { in: [ProjectType.compositeProject, ProjectType.collection] },
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

  isCollectionFiltered = async (userId: number, collectionId: number) => {
    const res = await this.prismaService.userCollectionFiltered.findUnique({
      where: {
        userId_collectionId: {
          collectionId,
          userId,
        },
      },
    });

    return res !== null;
  };

  justTesting = async () => {
    const collections = await this.prismaService.project.findMany({
      where: {
        type: 'collection',
      },
    });

    const result = collections.reduce(
      (acc, curr) => ({ ...acc, [curr.id]: 0 }),
      {} as Record<number, number>,
    );

    for (let i = 0; i < collections.length; i++) {
      const item = collections[i];
      const temp = await this.prismaService.projectInclusion.findMany({
        where: {
          state: 'included',
          userId: 1,
          project: {
            parentId: item.id,
          },
        },
      });

      result[item.id] = temp.length;
    }

    return result;
  };

  getProjects = async (parentCollectionId: number | null, userId: number) => {
    const projects = await this.prismaService.project.findMany({
      where: {
        parentId: parentCollectionId,
        type: { in: [ProjectType.project] },
      },
    });

    const withAdditionalFields = await Promise.all(
      projects.map(async (project) => {
        const [inclusionState] = await Promise.all([
          this.getProjectInclusionState(userId, project.id),
        ]);
        return {
          ...project,
          inclusionState,
        };
      }),
    );
    return withAdditionalFields;
  };

  // getCollectionVotingPower = async (
  //   collectionId: number | null,
  //   userId: number,
  // ): Promise<number> => {
  //   if (collectionId === null) return 1;

  //   const collection = await this.prismaService.project.findUnique({
  //     where: {
  //       id: collectionId,
  //       type: { in: [ProjectType.collection, ProjectType.compositeProject] },
  //     },
  //     select: { parentId: true },
  //   });

  //   if (!collection) throw Error('No such collection or composite project');

  //   const savedResult = await this.prismaService.share.findFirst({
  //     where: { projectId: collectionId, userId: userId },
  //   });

  //   if (!savedResult) throw Error('No corresponding value for the collection');

  //   return savedResult.share;

  //   // const ranking = await this.getRankingFromVotes(userId, collection.parentId);

  //   // const { share } = ranking.find((item) => item.id === collectionId)!;

  //   // if (collection.parentId === null) {
  //   //   return share;
  //   // } else {
  //   //   return (
  //   //     (await this.getCollectionVotingPower(collection.parentId, userId)) *
  //   //     share
  //   //   );
  //   // }
  // };

  // Checks whether a collection is a last layer collection (i.e., not having any collection children)
  isLastLayerCollection = async (collectionId: number | null) => {
    const hasCollectionChildren = await this.prismaService.project.findFirst({
      where: {
        parentId: collectionId,
        type: 'collection',
      },
    });

    return hasCollectionChildren === null ? true : false;
  };

  async finishCollection(userId: number, collectionId: number) {
    const [isFinished, isLastLayerCollection, hasThresholdVotes] =
      await Promise.all([
        this.isCollectionFinished(userId, collectionId),
        this.isLastLayerCollection(collectionId),
        this.hasThresholdVotes(collectionId, userId),
      ]);

    if (isFinished) return;
    if (!isLastLayerCollection)
      throw new ForbiddenException(
        'Just last layer categories are finish-able',
      );
    if (!hasThresholdVotes)
      throw new ForbiddenException(
        'You need to vote for the minimum threshold times',
      );

    await this.prismaService.userCollectionFinish.create({
      data: { userId: userId, collectionId: collectionId },
    });

    await this.saveResultsFromVotes(userId, collectionId);
  }

  saveResultsFromVotes = async (
    userId: number,
    collectionId: number | null,
  ) => {
    const ranking = await this.getRankingFromVotes(userId, collectionId);

    await Promise.all(
      ranking.map((el) =>
        this.prismaService.rank.upsert({
          update: { rank: undefined },
          create: {
            userId: userId,
            projectId: el.id,
            rank: null,
          },
          where: {
            userId_projectId: {
              userId: userId,
              projectId: el.id,
            },
          },
        }),
      ),
    );

    await Promise.all(
      ranking.map((el, index) => {
        const rank = index + 1;
        return this.prismaService.rank.upsert({
          update: { rank },
          create: {
            userId: userId,
            projectId: el.id,
            rank,
          },
          where: {
            userId_projectId: {
              userId: userId,
              projectId: el.id,
            },
          },
        });
      }),
    );
    // await this.prismaService.share.createMany({
    //   data: ranking.map((rank) => ({
    //     userId: userId,
    //     projectId: rank.id,
    //     share: rank.share,
    //   })),
    //   // update: { share: rank.share },
    //   // data: { userId: userId, projectId: rank.id, share: rank.share },
    //   // where: {
    //   //   userId_projectId: {
    //   //     userId: userId,
    //   //     projectId: rank.id,
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
    const [allVotes, allInclusionChildren, allCollections] = await Promise.all([
      this.prismaService.vote.findMany({
        where: {
          userId: userId,
          project1: { parentId: collectionId },
          project2: { parentId: collectionId },
        },
      }),
      this.prismaService.projectInclusion.findMany({
        where: {
          project: {
            parentId: collectionId,
          },
          state: 'included',
          userId,
        },
        include: { project: true },
      }),
      this.prismaService.project.findMany({
        where: {
          parentId: null,
          type: 'collection',
        },
      }),
    ]);

    const allChildren =
      collectionId === null
        ? allCollections
        : allInclusionChildren.map((item) => item.project);

    const winningProjects = allChildren.filter(
      (project) =>
        allVotes.some((vote) => vote.pickedId === project.id) === true,
    );

    const winningProjectsIds = winningProjects.map((el) => el.id);
    const nonWinningProjectsIds = allChildren
      .filter((project) => !winningProjectsIds.includes(project.id))
      .map((el) => el.id);

    const votesForWinningProjects = allVotes.filter(
      (vote) =>
        winningProjectsIds.includes(vote.project1Id) &&
        winningProjectsIds.includes(vote.project2Id),
    );

    const mappingObject: Record<number, number> = winningProjects.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const matrix = this.buildVotesMatrix(
      votesForWinningProjects.map(({ project1Id, project2Id, pickedId }) => ({
        id1: project1Id,
        id2: project2Id,
        pickedId: pickedId,
      })),
      winningProjects.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const resultProjectIdMapping = result.map((percentage, index) => {
      const project = winningProjects.find(
        (el) => el.id === zeroBasedMappingFunction(index),
      );

      return { project: project!, percentage };
    });

    const ranking = [
      ...resultProjectIdMapping
        .sort((a, b) => b.percentage - a.percentage)
        .map(({ project }, index) => {
          return {
            id: project!.id,
            rank: index + 1,
            name: project!.name,
            type: project!.type,
            RPGF4Id: project!.RPGF4Id,
          };
        }),
      ...nonWinningProjectsIds.map((id, index) => {
        const project = allChildren.find((el) => el.id === id);
        return {
          id: project!.id,
          rank: result.length + index + 1,
          name: project!.name,
          type: project!.type,
          RPGF4Id: project!.RPGF4Id,
        };
      }),
    ];

    return ranking.sort((a, b) => a.rank - b.rank);
  };

  getRootRanking = async (userId: number) => {
    const [ranking, rankedCollectionIds] = await Promise.all([
      this.getRankingFromVotes(userId, null),
      this.prismaService.userAttestation.findMany({
        select: { collectionId: true },
        where: {
          userId,
          collection: {
            parentId: null,
          },
        },
      }),
    ]);

    console.log('Ranking from votes:', ranking);

    // filter just finished collections
    const rankedCollectionsRanking = ranking.filter((item) =>
      rankedCollectionIds.map((item) => item.collectionId).includes(item.id),
    );

    const finishedCollections = await this.prismaService.project.findMany({
      where: {
        id: { in: rankedCollectionsRanking.map((el) => el.id) },
      },
    });

    return finishedCollections
      .map(({ id, name, image, type, impactDescription, RPGF4Id }) => ({
        id,
        name,
        rank: rankedCollectionsRanking.find((el) => el.id === id)!.rank,
        image,
        type,
        impactDescription,
        RPGF4Id,
        hasRanking: false,
      }))
      .sort((a, b) => a.rank - b.rank);
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
    if (collectionId === null) return this.getRootRanking(userId);

    const [savedResults] = await Promise.all([
      this.prismaService.rank.findMany({
        where: {
          project: { parentId: collectionId },
          userId: userId,
          rank: { not: null },
        },
        include: { project: true },
      }),
    ]);

    // // filter out the projects that were already filtered out
    // // in the project filtering phase
    // const includedProjectsResults = savedResults.filter(
    //   (item) =>
    //     !(
    //       item.project.type === 'project' &&
    //       !includedProjects.includes(item.projectId)
    //     ),
    // );

    return savedResults
      .map((item) => ({
        id: item.projectId,
        name: item.project.name,
        rank: item.rank!,
        image: item.project.image,
        type: item.project.type,
        RPGF4Id: item.project.RPGF4Id,
        hasRanking: false,
      }))
      .sort((a, b) => a.rank - b.rank);
  };

  getIncludedProjectIds = async (userId: number, collectionId: number) => {
    const includedProjects = await this.prismaService.projectInclusion.findMany(
      {
        select: { projectId: true },
        where: {
          userId,
          project: { parentId: collectionId },
          state: 'included',
        },
      },
    );

    return includedProjects.map((el) => el.projectId);
  };

  getAttestedCollectionPairs = async (userId: number) => {
    // const collectionId = null;

    const [allCollections, collectionPairwises] = await Promise.all([
      this.getCollections(userId, null),
      this.prismaService.vote.findMany({
        where: {
          userId,
          project1: {
            parentId: null,
            type: 'collection',
          },
        },
        orderBy: {
          project1Id: 'asc',
        },
      }),
    ]);

    const attestedCollections = allCollections.filter(
      (collection) => collection.progress === 'Attested',
    );

    if (attestedCollections.length < 2) return [];

    const allAttestedPairs = getPairwiseCombinations(
      attestedCollections.map((el) => el.id),
    );
    const remainingPairs = allAttestedPairs.filter((pair) => {
      const index = collectionPairwises.findIndex(
        (item) =>
          (item.project1Id === pair[0] && item.project2Id === pair[1]) ||
          (item.project1Id === pair[1] && item.project2Id === pair[0]),
      );

      if (index === -1) return true;
      return false;
    });

    if (remainingPairs.length === 0) return [];

    const result = allCollections.filter((collection) =>
      remainingPairs[0].includes(collection.id),
    );

    return result;
  };

  removeLastVote = async (userId: number, parentCollection: number | null) => {
    const lastVote = await this.prismaService.vote.findFirst({
      where: {
        userId,
        project1: { parentId: parentCollection },
        project2: { parentId: parentCollection },
      },
      orderBy: { updatedAt: 'desc' },
    });

    if (!lastVote)
      throw new NotFoundException('No earlier votes in this category');

    await this.prismaService.vote.delete({
      where: {
        id: lastVote.id,
      },
    });
  };

  getPairs = async (userId: number, parentCollection?: number, count = 1) => {
    const [collection, allVotes, allChildrenProjectInclusions] =
      await Promise.all([
        this.prismaService.project.findUnique({
          where: {
            id: parentCollection || -1,
            type: {
              in: [ProjectType.collection, ProjectType.compositeProject],
            },
          },
          select: { name: true, id: true },
        }),
        this.prismaService.vote.findMany({
          where: {
            userId: userId,
            project1: { parentId: parentCollection },
            project2: { parentId: parentCollection },
          },
        }),
        this.prismaService.projectInclusion.findMany({
          where: {
            project: {
              parentId: parentCollection,
            },
            state: 'included',
            userId,
          },
          include: { project: true },
        }),
      ]);

    const allChildren = allChildrenProjectInclusions.map(
      (item) => item.project,
    );

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.project1Id, vote.project2Id],
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

    if (allVotes.length === combinations.length) {
      if (collection) {
        // There's no other pairs to vote from so finishing the collection automatically
        await this.finishCollection(userId, collection.id);
      }

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
    }

    const sortedCombinations = sortCombinations(combinations, idRanking);

    const result = [];
    let i = 0;
    while (result.length < count) {
      const combination = sortedCombinations[i];
      const px = combination[0];
      const py = combination[1];
      const index = allVotes.findIndex(
        (vote) =>
          (vote.project1Id === px && vote.project2Id === py) ||
          (vote.project1Id === py && vote.project2Id === px),
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
    // const collection = await this.prismaService.project.findUnique({
    //   where: {
    //     id: collectionId,
    //     type: { in: [ProjectType.collection, ProjectType.compositeProject] },
    //   },
    //   include: {
    //     children: true,
    //   },
    // });

    const res = await this.prismaService.projectInclusion.findMany({
      where: {
        state: 'included',
        project: {
          parentId: collectionId,
          parent: {
            type: {
              in: [ProjectType.collection, ProjectType.compositeProject],
            },
          },
        },
        userId,
      },
      include: { project: true },
    });

    // The collection has no projects selected for voting
    if (res.length === 0) return false;

    const cid = res[0].project.parentId;

    if (!cid) throw new BadRequestException('Collection id invalid');

    const children = res.map((item) => item.project);

    const count = children.length;

    const threshold = this.calculateThreshold(count, cid);

    let numOfVotes = 0;

    numOfVotes = await this.prismaService.vote.count({
      where: {
        userId: userId,
        project1: { parentId: collectionId },
        project2: { parentId: collectionId },
      },
    });

    if (count < 2) return false;

    return numOfVotes / combinations(count, 2) >= threshold;
  };

  private formatRanking = (ranking: CollectionRanking['ranking']) => {
    return ranking.map((el) => ({
      id: el.id,
      rank: el.rank,
      name: el.name,
    }));
  };

  getBadgesFromDb = async (address: string): Promise<BadgeData | undefined> => {
    const res = await this.prismaService.user.findFirst({
      select: { badges: true },
      where: { address },
    });

    if (!res || !res.badges) return undefined;

    return res.badges.valueOf() as BadgeData;
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
    const [entities] = await Promise.all([
      this.prismaService.project.findMany({
        select: { id: true, type: true, name: true, parentId: true },
      }),
      // this.prismaService.project.count({
      //   where: { type: 'project' },
      // }),
    ]);

    const projects = entities.filter((el) => el.type === 'project');

    const collections = entities.filter((el) => el.type !== 'project');

    await this.prismaService.rank.createMany({
      data: collections.map((item, index) => ({
        rank: null,
        userId: userId,
        projectId: item.id,
      })),
    });

    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const siblings = projects.filter(
        (project) => project.parentId === collection.id,
      );

      await this.prismaService.rank.createMany({
        data: siblings.map((item, index) => ({
          rank: null,
          userId,
          projectId: item.id,
        })),
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
        type: { in: [ProjectType.collection, ProjectType.compositeProject] },
      },
    });

    return subCollections > 0;
  };

  private calculateThreshold = (count: number, collectionId: number | null) => {
    if (collectionId === null || count < 7) return 0.4;
    // const threshold = 1 / (count - 1);
    const threshold = 0.3;
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
      pickedId: number | null;
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
      )?.pickedId === zeroBasedMappingFunction(i)
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

  uploadFileToPinata = async (filePath: string) => {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

    const data = new FormData();
    data.append('file', fs.createReadStream(filePath));

    try {
      const response = await axios.post(url, data, {
        headers: {
          ['Content-Type']: `multipart/form-data`,
          Authorization: process.env.PINATA,
        },
      });

      return response.data.IpfsHash;
    } catch (e) {
      console.error(e);
    }
  };

  private getMinimumIncludedProjects = async (cid: number) => {
    const numOfProjects = await this.prismaService.project.count({
      where: {
        parentId: cid,
      },
    });

    if (numOfProjects < 7) return 6;

    return Math.ceil(0.21 * numOfProjects);
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

  private validateProjectVotes = async (
    userId: number,
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

    const [project1, project2, inclusion1, inclusion2] = await Promise.all([
      this.prismaService.project.findFirst({
        where: { id: project1Id },
      }),
      this.prismaService.project.findFirst({
        where: { id: project2Id },
      }),
      this.prismaService.projectInclusion.findUnique({
        where: { userId_projectId: { projectId: project1Id, userId } },
      }),
      this.prismaService.projectInclusion.findUnique({
        where: { userId_projectId: { projectId: project2Id, userId } },
      }),
    ]);

    if (
      !project1 ||
      !project2 ||
      !project1.parentId ||
      !project2.parentId ||
      project1.parentId !== project2.parentId
    )
      throw new BadRequestException('Invalid pair of projects');

    if (inclusion1?.state !== 'included' || inclusion2?.state !== 'included')
      throw new BadRequestException(
        'Already excluded projects can not be compared',
      );

    const progressStatus = await this.getCollectionProgressStatus(
      userId,
      project1.parentId,
    );

    if (
      progressStatus !== 'Filtered' &&
      progressStatus !== 'WIP' &&
      progressStatus !== 'WIP - Threshold'
    )
      throw new ForbiddenException(
        "You can only get pairs for a collection that's Filtered, WIP or WIP-Threshold",
      );
  };

  private getProjectInclusionState = async (
    userId: number,
    projectId: number,
  ) => {
    const exclusion = await this.prismaService.projectInclusion.findUnique({
      where: { userId_projectId: { userId, projectId } },
    });

    return exclusion?.state || 'pending';
  };
}
