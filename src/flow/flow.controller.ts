import {
  BadRequestException,
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
import { PairsResult } from './dto/pairsResult';
import { sortProjectId } from 'src/utils';
import { CollectionRanking } from './types';
import { validateRanking } from 'src/utils/edit-logic';

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/pinJSONToIPFS')
  async pinJSONToIPFS(@Body('json') json: string) {
    const hash = await this.flowService.pinJSONToIPFS(json);

    return hash;
  }

  @Get('/isMoon')
  async isMoon(@Query('cid') collectionId?: number) {
    const isMoon = await this.prismaService.project.findFirst({
      where: {
        parentId: collectionId,
        type: 'collection',
      },
    });

    return isMoon === null ? true : false;
  }

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
    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      collectionId,
    );

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
    if (collectionId) {
      const hasThresholdVotes = await this.flowService.hasThresholdVotes(
        collectionId,
        userId,
      );
      if (!hasThresholdVotes)
        throw new ForbiddenException('Threshold votes missing');
    }

    let isSaved = true;
    if (collectionId) {
      const item = await this.prismaService.userCollectionFinish.findUnique({
        where: {
          user_id_collection_id: {
            user_id: userId,
            collection_id: collectionId,
          },
        },
      });

      if (!item) isSaved = false;
    }

    if (!isSaved) {
      await Promise.all([
        this.flowService.saveResultsFromVotes(userId, collectionId || null),
        this.prismaService.userCollectionFinish.create({
          data: { user_id: userId, collection_id: collectionId! },
        }),
      ]);
    }

    console.log('check:', collectionId);
    if (!collectionId && collectionId !== 0) {
      const alreadySaved = await this.prismaService.share.findFirst({
        where: {
          project: {
            parentId: null,
          },
        },
      });
      console.log('ss:', alreadySaved);
      if (alreadySaved === null)
        await this.flowService.saveResultsFromVotes(userId, null);
    }

    const [ranking, votingPower, collection] = await Promise.all([
      this.flowService.getRanking(userId, collectionId || null),
      this.flowService.getCollectionVotingPower(collectionId || null, userId),
      this.prismaService.project.findFirst({
        where: { id: collectionId || -1 },
      }),
    ]);

    // if (collectionId) {
    //   await this.prismaService.userCollectionFinish.upsert({
    //     create: { user_id: userId, collection_id: collectionId },
    //     update: { user_id: userId, collection_id: collectionId },
    //     where: {
    //       user_id_collection_id: {
    //         user_id: userId,
    //         collection_id: collectionId,
    //       },
    //     },
    //   });
    // }

    return {
      ranking,
      hasRanking: true,
      isFinished: true,
      type: collection?.type || 'collection',
      name: collection?.name || 'root',
      share: votingPower,
      id: collection?.id || -1,
    };
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Overall ranking' })
  @Get('/ranking/overall')
  async getOverallRanking(@Req() { userId }: AuthedReq) {
    const result = await this.flowService.getOverallRanking(userId);
    return result;
  }

  @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  @Post('/ranking')
  async submitEditedRanking(
    @Req() { userId }: AuthedReq,
    @Body() input: { shares: CollectionRanking },
  ) {
    if (!validateRanking(input.shares))
      throw new BadRequestException('Invalid ranking list');

    const lists = this.flowService.breakOverallRankingDown(input.shares);
    if (!(await this.flowService.allSiblingsExist(lists))) {
      throw new BadRequestException('All siblings should exist');
    }

    await this.flowService.addManyShares(
      lists.reduce(
        (acc, curr) => [
          ...acc,
          ...curr.ranking.map((el) => ({ id: el.id, share: el.share })),
        ],
        [] as { id: number; share: number }[],
      ),
      userId,
    );

    return 'created';
  }

  // @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata() {
    // for (let i = 2; i < 9; i++) {
    // const user = await this.prismaService.user.findFirst({
    //   select: { id: true },
    //   where: { address: '0xD7542DC0F58095064BFEf6117fac82E4c5504d28' },
    // });

    // console.log(user?.id);

    // const userId = user?.id || 1;
    const userId = 1;
    await this.prismaService.expertiseVote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.vote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.userCollectionFinish.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.share.deleteMany({
      where: { user_id: userId },
    });
    // }
  }
}
