import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
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
import { PairsResult } from './dto/pairsResult';

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'pid',
    description:
      'Parent id of the collections (skip if you want the top level collections)',
    required: false,
  })
  @Get('/collections')
  async getCollections(@Query('pid') parentId?: number) {
    const collections = await this.flowService.getCollections(parentId);
    return collections;
  }

  @UseGuards(AuthGuard)
  @Post('/projects/vote')
  async voteProjects(
    @Req() { userId }: AuthedReq,
    @Body() { project1Id, project2Id, pickedId }: VoteProjectsDTO,
  ) {
    return this.flowService.voteForProjects(
      userId,
      project1Id,
      project2Id,
      pickedId,
    );
  }

  @UseGuards(AuthGuard)
  @Post('/collections/vote')
  async voteCollections(
    @Req() { userId }: AuthedReq,
    @Body() { collection1Id, collection2Id, pickedId }: VoteCollectionsDTO,
  ) {
    return this.flowService.voteForCollections(
      userId,
      collection1Id,
      collection2Id,
      pickedId,
    );
  }

  @ApiQuery({ name: 'cid', description: 'collection id of the pairs' })
  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns 3 pairs of comparisons + progress data',
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

    return ranking;
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
  }
}
