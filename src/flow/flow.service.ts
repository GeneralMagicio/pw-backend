import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { getPairwiseCombinations, sortCombinations } from 'src/utils';
import {
  generateZeroMatrix,
  getRankingForSetOfDampingFactors,
} from 'src/utils/mathematical-logic';
import {
  CollectionProgressStatus,
  CollectionRanking,
  ProjectRanking,
} from './types';
import { ProjectType } from '@prisma/client';
import axios from 'axios';
import * as fs from 'fs';
import * as FormData from 'form-data';
import { BadgeData } from 'src/utils/badges/readBadges';
import { Rating } from './dto/voteProjects.dto';
import { combinations } from 'mathjs';

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

  getCollectionProgressStatus = async (
    userId: number,
    collectionId: number,
  ): Promise<CollectionProgressStatus> => {
    const isLastLayerCollection = await this.isLastLayerCollection(
      collectionId,
    );

    if (isLastLayerCollection) {
      const [isFinished, hasVotes] = await Promise.all([
        this.isCollectionFinished(userId, collectionId),
        this.isCollectionStarted(userId, collectionId),
      ]);

      return isFinished ? 'Finished' : hasVotes ? 'WIP' : 'Pending';
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
        ]);
        return {
          ...collection,
          hasSubcollections,
          progress,
        };
      }),
    );
    return withAdditionalFields;
  };

  getProjects = async (parentCollectionId: number | null, userId: number) => {
    const projects = await this.prismaService.project.findMany({
      where: {
        parentId: parentCollectionId,
        type: { in: [ProjectType.project] },
      },
    });

    return projects;
  };

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
    const [isFinished, isLastLayerCollection] = await Promise.all([
      this.isCollectionFinished(userId, collectionId),
      this.isLastLayerCollection(collectionId),
    ]);

    if (isFinished) return;
    if (!isLastLayerCollection)
      throw new ForbiddenException(
        'Just last layer categories are finish-able',
      );

    await this.prismaService.userCollectionFinish.create({
      data: { userId: userId, collectionId: collectionId },
    });

    await this.saveResultsFromVotes(userId, collectionId);
  }

  setCoI = async (userId: number, projectId: number) => {
    await this.prismaService.projectCoI.create({
      data: {
        userId,
        projectId,
      },
    });
  };

  setRating = async (
    projectId: number,
    userId: number,
    rating: Exclude<Rating, null>,
  ) => {
    await this.prismaService.projectStar.create({
      data: {
        star: rating,
        projectId,
        userId,
      },
    });
  };

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
    const [allVotes, allProjectChildren, allCollections, allCoIs, ratings] =
      await Promise.all([
        this.prismaService.vote.findMany({
          where: {
            userId: userId,
            project1: { parentId: collectionId },
            project2: { parentId: collectionId },
          },
        }),
        this.prismaService.project.findMany({
          where: {
            parentId: collectionId,
          },
        }),
        this.prismaService.project.findMany({
          where: {
            parentId: null,
            type: 'collection',
          },
        }),
        this.prismaService.projectCoI.findMany({
          where: {
            project: { parentId: collectionId },
            userId,
          },
        }),
        this.prismaService.projectStar.findMany({
          where: {
            userId,
            project: {
              parentId: collectionId,
            },
          },
        }),
      ]);

    const allChildren =
      collectionId === null
        ? allCollections
        : allProjectChildren.filter(
            (el) => !allCoIs.find((item) => item.projectId === el.id),
          );

    // const winningProjects = allChildren.filter(
    //   (project) =>
    //     allVotes.some((vote) => vote.pickedId === project.id) === true,
    // );

    // const winningProjectsIds = winningProjects.map((el) => el.id);
    // const nonWinningProjectsIds = allChildren
    //   .filter((project) => !winningProjectsIds.includes(project.id))
    //   .map((el) => el.id);

    // const votesForWinningProjects = allVotes.filter(
    //   (vote) =>
    //     winningProjectsIds.includes(vote.project1Id) &&
    //     winningProjectsIds.includes(vote.project2Id),
    // );

    const noRatingProjects = allChildren
      .filter((el) => !ratings.find((item) => item.projectId === el.id))
      .map((el) => ({ projectId: el.id, star: 3 }));

    const oneRatingProjects = allChildren.filter(
      (el) => ratings.find((item) => item.projectId === el.id)?.star === 1,
    );

    const nonOneRatingProjects = allChildren.filter(
      (el) => !oneRatingProjects.find((item) => item.id === el.id),
    );

    const nonOneRatings = ratings
      .filter((el) => el.star !== 1)
      .map(({ projectId, star }) => ({ projectId, star }))
      .concat(noRatingProjects);

    const mappingObject: Record<number, number> = nonOneRatingProjects.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const zeroBasedMappingFunction = (index: number) => mappingObject[index];

    const votes: { id1: number; id2: number; pickedId: number | null }[] = [];

    for (let i = 0; i < nonOneRatings.length; i++) {
      const rating = nonOneRatings[i];
      for (let j = i; j < nonOneRatings.length; j++) {
        const comparingRating = nonOneRatings[j];
        if (rating.star > comparingRating.star) {
          votes.push({
            id1: rating.projectId,
            id2: comparingRating.projectId,
            pickedId: rating.projectId,
          });
        }
        if (rating.star < comparingRating.star) {
          votes.push({
            id1: rating.projectId,
            id2: comparingRating.projectId,
            pickedId: comparingRating.projectId,
          });
        }
      }
    }

    for (const vote of allVotes) {
      if (
        votes.findIndex(
          (el) =>
            (vote.project1Id === el.id1 && vote.project2Id === el.id2) ||
            (vote.project1Id === el.id2 && vote.project2Id === el.id1),
        ) !== -1
      )
        continue;

      if (
        oneRatingProjects.find(
          (el) => el.id === vote.project1Id || el.id === vote.project2Id,
        )
      )
        continue;

      votes.push({
        id1: vote.project1Id,
        id2: vote.project2Id,
        pickedId: vote.pickedId,
      });
    }

    const matrix = this.buildVotesMatrix(
      votes,
      nonOneRatingProjects.map(({ id }) => ({ id })),
      zeroBasedMappingFunction,
    );

    const result = getRankingForSetOfDampingFactors(matrix);

    const resultProjectIdMapping = await Promise.all(
      result.map(async (percentage, index) => {
        const project = nonOneRatingProjects.find(
          (el) => el.id === zeroBasedMappingFunction(index),
        );

        const star = await this.getProjectStars(project!.id, userId);

        return { project: project!, percentage, star };
      }),
    );

    const ranking = [
      ...resultProjectIdMapping
        .sort((a, b) => b.percentage - a.percentage)
        .map(({ project, percentage, star }, index) => {
          return {
            id: project!.id,
            rank: index + 1,
            star,
            share: percentage,
            name: project!.name,
            type: project!.type,
            RPGF5Id: project!.RPGF5Id,
          };
        }),
      ...oneRatingProjects.map((project, index) => ({
        id: project!.id,
        rank: result.length + index + 1,
        star: 1,
        share: 0,
        name: project!.name,
        type: project!.type,
        RPGF5Id: project!.RPGF5Id,
      })),
    ];

    return ranking.sort((a, b) => a.rank - b.rank);
  };

  getRootRanking = async (userId: number) => {
    const [ranking, collectionIds] = await Promise.all([
      this.getRankingFromVotes(userId, null),
      this.prismaService.project.findMany({
        select: { id: true },
        where: {
          type: 'collection',
          parentId: null,
        },
      }),
    ]);

    // filter just finished collections
    const rankedCollectionsRanking = ranking.filter((item) =>
      collectionIds.map((el) => el.id).includes(item.id),
    );

    const finishedCollections = await this.prismaService.project.findMany({
      where: {
        id: { in: rankedCollectionsRanking.map((el) => el.id) },
      },
    });

    return finishedCollections
      .map(({ id, name, image, type, description, RPGF5Id }) => ({
        id,
        name,
        rank: rankedCollectionsRanking.find((el) => el.id === id)!.rank,
        image,
        type,
        description,
        RPGF5Id,
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
    const ranking = await this.getRankingFromVotes(userId, collectionId);
    // if (collectionId === null) return this.getRootRanking(userId);

    // const [savedResults] = await Promise.all([
    //   this.prismaService.rank.findMany({
    //     where: {
    //       project: { parentId: collectionId },
    //       userId: userId,
    //       rank: { not: null },
    //     },
    //     include: { project: true },
    //   }),
    // ]);

    return ranking.sort((a, b) => a.rank - b.rank);
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

    const lastRatings = await this.prismaService.projectStar.findMany({
      where: {
        userId: userId,
      },
      take: 2,
    });

    for (const rating of lastRatings) {
      if (
        rating.projectId === lastVote.project1Id ||
        rating.projectId === lastVote.project2Id
      ) {
        await this.prismaService.projectStar.delete({
          where: {
            id: rating.id,
          },
        });
      }
    }

    await this.prismaService.vote.delete({
      where: {
        id: lastVote.id,
      },
    });
  };

  private calculateProgress = (
    allVotes: { project1Id: number; project2Id: number }[],
    projectStars: { projectId: number; star: number }[],
    allProjects: { id: number }[],
  ) => {
    const getStarsById = (id: number) =>
      projectStars.find((el) => el.projectId === id)?.star || null;

    const starSubcategories = projectStars.reduce(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (acc, project) => ({ ...acc, [project.star]: acc[project.star] + 1 }),
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, null: 0 },
    );

    const nullProjects = allProjects.filter(
      (el) => !projectStars.find((item) => item.projectId === el.id),
    );

    starSubcategories.null = nullProjects.length;

    let total = 0;
    for (const key in starSubcategories) {
      if (key === '1') continue;
      const count = starSubcategories[key as keyof typeof starSubcategories];
      if (count < 2) continue;
      total += combinations(count, 2);
    }

    const effectiveVotes = allVotes.filter(
      (vote) =>
        getStarsById(vote.project1Id) === getStarsById(vote.project2Id) &&
        getStarsById(vote.project1Id) !== 1,
    );

    return effectiveVotes.length / total;
  };

  getPairs = async (userId: number, parentCollection?: number, count = 1) => {
    const [collection, allVotes, projects, projectStars, projectCoIs] =
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
        this.prismaService.project.findMany({
          where: {
            parentId: parentCollection || -1,
          },
        }),
        this.prismaService.projectStar.findMany({
          where: {
            userId,
            project: {
              parentId: parentCollection || -1,
            },
          },
        }),
        this.prismaService.projectCoI.findMany({
          where: {
            project: { parentId: parentCollection },
            userId,
          },
        }),
      ]);

    // projects except those with conflict of interest
    const allProjects = projects.filter(
      (item) => !projectCoIs.find((el) => el.projectId === item.id),
    );

    const progress = this.calculateProgress(
      allVotes,
      projectStars,
      allProjects,
    );

    if (progress === 1) {
      // if (collection) {
      //   // There's no other pairs to vote from so finishing the collection automatically
      //   await this.finishCollection(userId, collection.id);
      // }

      return {
        pairs: [],
        totalPairs: 100,
        votedPairs: allVotes.length,
        progress,
        name: collection?.name || 'Root',
        threshold: 1,
      };
    }

    const getStarsById = (id: number) =>
      projectStars.find((el) => el.projectId === id)?.star || null;

    const votedIds = allVotes.reduce(
      (acc, vote) => [...acc, vote.project1Id, vote.project2Id],
      [] as number[],
    );

    const allIds = allProjects.map((child) => child.id);

    const votedCollectionsRanking = this.determineIdRanking(votedIds);

    // ascending id rankings (i.e., the last element has been voted the most)
    let idRanking: number[] = [];

    for (let i = 0; i < allIds.length; i++) {
      const value = allIds[i];
      if (!votedCollectionsRanking.includes(value)) idRanking.push(value);
    }

    idRanking = [...idRanking, ...votedCollectionsRanking];

    const combinations = getPairwiseCombinations(allIds);

    const sortedCombinations = sortCombinations(combinations, idRanking);

    const result = [];
    let i = 0;
    while (result.length < count) {
      const combination = sortedCombinations[i];
      const px = combination[0];
      const py = combination[1];
      if (getStarsById(px) !== getStarsById(py) || getStarsById(px) === 1) {
        i++;
        continue;
      }
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
            pair.map(async (project) => ({
              ...project,
              metadata: JSON.parse(project.metadata),
              rating: await this.getProjectStars(project.id, userId),
            })),
          ),
      ),
    );

    return {
      pairs,
      totalPairs: combinations.length,
      votedPairs: allVotes.length,
      progress,
      name: collection?.name || 'Root',
      threshold: this.calculateThreshold(allIds.length, collection?.id || null),
    };
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

  populateInitialRanking = async (userId: number) => {
    const [entities] = await Promise.all([
      this.prismaService.project.findMany({
        select: { id: true, type: true, name: true, parentId: true },
      }),
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

  // private getChildProjects = async (collectionId: number) => {
  //   const result: unknown[] = [];
  //   const children = await this.prismaService.project.findMany({
  //     select: { id: true, type: true, image: true, name: true },
  //     where: { parentId: collectionId },
  //   });
  //   for (const child of children) {
  //     if (child.type === 'project') result.push(child);
  //     else result.push(await this.getChildProjects(child.id));
  //   }

  //   return result.flat();
  // };

  private getProjectStars = async (projectId: number, userId: number) => {
    const stars = await this.prismaService.projectStar.findFirst({
      where: {
        projectId,
        userId,
      },
      orderBy: { updatedAt: 'desc' },
    });

    return stars?.star || null;
  };

  // private countNumOfProjects = async (collectionId: number) => {
  //   let count = 0;
  //   const children = await this.prismaService.project.findMany({
  //     select: { id: true, type: true },
  //     where: { parentId: collectionId },
  //   });
  //   for (const child of children) {
  //     if (child.type === 'project') count += 1;
  //     else count += await this.countNumOfProjects(child.id);
  //   }

  //   return count;
  // };

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

    const [project1, project2] = await Promise.all([
      this.prismaService.project.findFirst({
        where: { id: project1Id },
      }),
      this.prismaService.project.findFirst({
        where: { id: project2Id },
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

    const progressStatus = await this.getCollectionProgressStatus(
      userId,
      project1.parentId,
    );

    if (
      progressStatus !== 'Pending' &&
      progressStatus !== 'WIP' &&
      progressStatus !== 'WIP - Threshold'
    )
      throw new ForbiddenException(
        "You can only get pairs for a collection that's Filtered, WIP or WIP-Threshold",
      );
  };
}
