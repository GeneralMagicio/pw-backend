import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { getPairwiseCombinations, sortCombinations } from 'src/utils';
import {
  calculateCollectionRanking,
  generateZeroMatrix,
  getRankingForSetOfDampingFactors,
} from 'src/utils/mathematical-logic';

@Injectable()
export class FlowService {
  private readonly logger = new Logger(FlowService.name);
  constructor(private readonly prismaService: PrismaService) {}

  // This would determine the latest collection a user has voted in
  // So they can pick up where they've left off
  determineLatestCollection = async (userId: number) => {
    const latestVote = await this.prismaService.projectVote.findFirst({
      where: { user_id: userId },
      orderBy: { updated_at: 'desc' },
      include: { project1: true },
    });

    return latestVote.project1.collection_id;
  };

  voteForProjects = async (
    userId: number,
    project1Id: number,
    project2Id: number,
    pickedId: number,
  ) => {
    this.validateProjectVote(project1Id, project2Id, pickedId);
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

  voteForCollections = async (
    userId: number,
    collection1Id: number,
    collection2Id: number,
    pickedId: number,
  ) => {
    this.validateCollectionVote(collection1Id, collection2Id, pickedId);
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

  getCollections = async (parentCollectionId?: number) => {
    const collections = await this.prismaService.collection.findMany({
      where: { parent_collection_id: parentCollectionId },
    });

    return collections;
  };

  getCollectionRanking = async (userId: number, collectionId: number) => {
    const allVotes = await this.prismaService.projectVote.findMany({
      where: {
        user_id: userId,
        project1: { collection_id: collectionId },
        project2: { collection_id: collectionId },
      },
    });

    const allProjects = await this.prismaService.project.findMany({
      where: {
        collection_id: collectionId,
      },
    });

    const matrix = this.buildVotesMatrix(allVotes, allProjects);

    // matrix[0][2] = 1;
    // matrix[3][8] = 1;
    // matrix[8][5] = 1;
    // matrix[4][9] = 1;
    matrix[0][7] = 1;
    matrix[7][8] = 1;
    // matrix[0][6] = 1;
    // matrix[1][5] = 1;
    // matrix[6][8] = 1;
    matrix[0][5] = 1;
    matrix[2][5] = 1;
    // matrix[9][5] = 1;
    // matrix[0][4] = 1;
    matrix[7][3] = 1;
    matrix[6][1] = 1;
    // matrix[2][7] = 1;
    // matrix[6][5] = 1;
    matrix[9][2] = 1;
    matrix[0][3] = 1;
    matrix[4][7] = 1;
    // matrix[8][2] = 1;
    // matrix[9][3] = 1;

    console.log('matrix:', matrix);
    return getRankingForSetOfDampingFactors(matrix);
  };

  getPairs = async (userId: number, collectionId: number, count = 5) => {
    const allVotes = await this.prismaService.projectVote.findMany({
      where: {
        user_id: userId,
        project1: { collection_id: collectionId },
        project2: { collection_id: collectionId },
      },
    });

    const allProjects = await this.prismaService.project.findMany({
      where: {
        collection_id: collectionId,
      },
    });

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

    console.log('all Ids:', allIds);
    console.log('voted projects', votedProjectsRanking);
    console.log('id ranking:', idRanking);

    const combinations = getPairwiseCombinations(allIds);

    const sortedCombinations = sortCombinations(combinations, idRanking);

    console.log('sorted comb:', sortedCombinations);

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

    return pairs;
  };

  private buildVotesMatrix = (
    votes: {
      project1_id: number;
      project2_id: number;
      picked_id: number;
    }[],
    allProjects: { id: number }[],
  ) => {
    // console.log(votes, allProjects);

    const n = allProjects.length;
    // an n*n zero matrix
    const matrix = generateZeroMatrix(n);
    const zeroBasedMapping = allProjects.reduce(
      (acc, project, index) => ({ ...acc, [index]: project.id }),
      {},
    );

    const getVote = (i: number, j: number) =>
      votes.find(
        (vote) =>
          (vote.project1_id === zeroBasedMapping[i] &&
            vote.project2_id === zeroBasedMapping[j]) ||
          (vote.project1_id === zeroBasedMapping[j] &&
            vote.project2_id === zeroBasedMapping[i]),
      )?.picked_id === zeroBasedMapping[i]
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
    const frequencyMap = {};
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

  private validateCollectionVote = async (
    collection1Id: number,
    collection2Id: number,
    pickedId: number,
  ) => {
    if (collection1Id === collection2Id)
      throw new BadRequestException(
        'Collection 1 and collection 2 ids should be different',
      );

    if (pickedId !== collection1Id && pickedId !== collection2Id)
      throw new BadRequestException('Picked collection invalid id');

    const [collection1, collection2] = await Promise.all([
      this.prismaService.collection.findFirst({ where: { id: collection1Id } }),
      this.prismaService.collection.findFirst({ where: { id: collection2Id } }),
    ]);

    if (collection1.parent_collection_id !== collection2.parent_collection_id)
      throw new BadRequestException('Collections should have a common parent');
  };

  private validateProjectVote = async (
    project1Id: number,
    project2Id: number,
    pickedId: number,
  ) => {
    if (project1Id === project2Id)
      throw new BadRequestException(
        'Project 1 and project 2 ids should be different',
      );

    if (pickedId !== project1Id && pickedId !== project2Id)
      throw new BadRequestException('Picked project invalid id');

    const [project1, project2] = await Promise.all([
      this.prismaService.project.findFirst({ where: { id: project1Id } }),
      this.prismaService.project.findFirst({ where: { id: project2Id } }),
    ]);

    if (project1.collection_id !== project2.collection_id)
      throw new BadRequestException('Projects should have a common collection');
  };
}
