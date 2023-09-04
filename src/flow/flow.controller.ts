import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Logger,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { FlowService } from './flow.service';
import { PrismaService } from 'src/prisma.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { VoteProjectsDTO } from './dto/voteProjects.dto';
import { VoteCollectionsDTO } from './dto/voteCollections.dto';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { ExpertisePairs, PairsResult } from './dto/pairsResult';
import { sortProjectId } from 'src/utils';
import { CollectionService } from 'src/collection/collection.service';

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly collectionService: CollectionService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description:
      'Parent id of the collections (skip if you want the top level collections)',
    required: false,
  })
  @Get('/collections')
  async getCollections(
    @Req() { userId }: AuthedReq,
    @Query('cid') parentId?: number,
  ) {
    const collections = await this.flowService.getCollections(
      userId,
      parentId || null,
    );
    return collections;
  }

  @UseGuards(AuthGuard)
  @Get('/status')
  async getStatus(@Req() { userId }: AuthedReq) {
    const [checkpoint, impact, expertise] = await Promise.all([
      this.flowService.determineResumeVoting(userId),
      this.flowService.hasAnsweredImpact(userId),
      this.flowService.hasAnsweredExpertise(userId),
    ]);
    return { checkpoint, impact, expertise };
  }

  @UseGuards(AuthGuard)
  @Post('/expertise/vote')
  async voteExpertise(
    @Req() { userId }: AuthedReq,
    @Body() { collection1Id, collection2Id, pickedId }: VoteCollectionsDTO,
  ) {
    const [id1, id2] = sortProjectId(collection1Id, collection2Id);
    return await this.flowService.voteForExpertise(userId, id1, id2, pickedId);
  }

  @UseGuards(AuthGuard)
  @Post('/projects/vote')
  async voteProjects(
    @Req() { userId }: AuthedReq,
    @Body() { project1Id, project2Id, pickedId }: VoteProjectsDTO,
  ) {
    const [id1, id2] = sortProjectId(project1Id, project2Id);
    return await this.flowService.voteForProjects(userId, id1, id2, pickedId);
  }

  @UseGuards(AuthGuard)
  @Post('/collections/vote')
  async voteCollections(
    @Req() { userId }: AuthedReq,
    @Body() { collection1Id, collection2Id, pickedId }: VoteCollectionsDTO,
  ) {
    const [id1, id2] = sortProjectId(collection1Id, collection2Id);
    return await this.flowService.voteForCollections(
      userId,
      id1,
      id2,
      pickedId,
    );
  }

  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns a pair + progress data',
  })
  @UseGuards(AuthGuard)
  @Get('/expertise/pairs')
  async getExpertisePairs(@Req() { userId }: AuthedReq) {
    const pairs: ExpertisePairs = await this.flowService.getExpertisePairs(
      userId,
      1,
    );

    return pairs;
  }

  @ApiQuery({ name: 'cid', description: 'collection id of the pairs' })
  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns a pair of comparisons + progress data',
  })
  @UseGuards(AuthGuard)
  @Get('/pairs')
  async getPairs(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    let pairs: PairsResult;
    const type = await this.flowService.getCollectionSubunitType(collectionId);
    if (type === 'collection')
      pairs = await this.flowService.getCollectionPairs(
        userId,
        collectionId,
        1,
      );
    else if (collectionId && type === 'project')
      pairs = await this.flowService.getProjectPairs(userId, collectionId, 1);
    else pairs = [] as any;

    return pairs;
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Expertise ranking' })
  @Get('/expertise/ranking')
  async getExpertiseRanking(@Req() { userId }: AuthedReq) {
    const ranking = await this.flowService.getExpertiseRanking(userId);

    return ranking;
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Overall progress' })
  @Get('/progress')
  async getProgress(@Req() { userId }: AuthedReq) {
    const progress = await this.flowService.calculateOverallProgress(userId);

    return progress;
  }

  @ApiQuery({
    name: 'cid',
    description:
      'Collection id of the ranking (Skip if you look for top level collections)',
    required: false,
  })
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Collection ranking' })
  @Get('/ranking')
  async getRanking(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    if (collectionId) {
      const hasThresholdVotes = await this.flowService.hasThresholdVotes(
        collectionId,
        userId,
      );
      if (!hasThresholdVotes)
        throw new ForbiddenException('Threshold votes missing');
    }
    let ranking;
    const type = await this.flowService.getCollectionSubunitType(collectionId);
    if (type === 'collection')
      ranking = await this.flowService.getCollectionRankingWithCollectionType(
        userId,
        collectionId,
      );
    else if (collectionId && type === 'project')
      ranking = await this.flowService.getCollectionRankingWithProjectType(
        userId,
        collectionId,
      );

    if (collectionId) {
      await this.prismaService.userCollectionFinish.upsert({
        create: { user_id: userId, collection_id: collectionId },
        update: { user_id: userId, collection_id: collectionId },
        where: {
          user_id_collection_id: {
            user_id: userId,
            collection_id: collectionId,
          },
        },
      });
    }

    const nextCollectionId = await this.flowService.getNextCollection(userId);
    const nextCollection = nextCollectionId
      ? await this.collectionService.getCollection(nextCollectionId)
      : null;

    return {
      ...ranking,
      nextCollection,
    };
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata(@Req() { userId }: AuthedReq) {
    await this.prismaService.projectVote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.collectionVote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.userCollectionFinish.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.expertiseVote.deleteMany({
      where: { user_id: userId },
    });
  }

  // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  // @Get('/insertImage')
  // async insertImages(@Req() { userId }: AuthedReq) {
  //   const collections = await this.prismaService.collection.findMany({
  //     select: { id: true, name: true },
  //   });

  //   await Promise.all(
  //     collections.map(async (collection) => {
  //       await this.prismaService.collection.update({
  //         where: { id: collection.id },
  //         data: {
  //           image: `https://wsrv.nl/?url=pairwise.cupofjoy.store/rpgf2/${collection.name}.png`,
  //         },
  //       });
  //     }),
  //   );
  // }

  // @Get('/correctInvalid')
  // async checkForInvalid() {
  //   const allInvalidVotes = await this.prismaService.projectVote.findMany({
  //     select: { id: true, project1_id: true, project2_id: true },
  //     where: {
  //       project1_id: { lt: this.prismaService.projectVote.fields.project2_id },
  //     },
  //   });

  //   console.log('number of votes:', allInvalidVotes.length);

  // for (let i = 0; i < allInvalidVotes.length; i++) {
  //   const item = allInvalidVotes[i];
  //   console.log('this id was invalid:', item.id);
  //   await this.prismaService.projectVote.update({
  //     where: { id: item.id },
  //     data: { project1_id: item.project2_id, project2_id: item.project1_id },
  //   });
  // }

  // allVotes.forEach((vote, i, votes) => {
  //   const index = votes.findIndex(
  //     (vote2) =>
  //       (vote.id !== vote2.id &&
  //         vote.user_id === vote2.user_id &&
  //         vote.project1_id === vote2.project1_id &&
  //         vote.project2_id === vote2.project2_id) ||
  //       (vote.id !== vote2.id &&
  //         vote.user_id === vote2.user_id &&
  //         vote.project1_id === vote2.project2_id &&
  //         vote.project2_id === vote2.project1_id),
  //   );
  //   if (index !== -1) console.log(vote, votes[index]);
  // });
  // }
}
