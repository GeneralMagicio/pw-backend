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

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
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
  @Post('/subprojects/vote')
  async voteSubProjects(
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
    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      collectionId,
    );

    return pairs;
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Expertise ranking' })
  @Get('/expertise/ranking')
  async getExpertiseRanking(@Req() { userId }: AuthedReq) {
    const ranking = await this.flowService.getExpertiseRanking(userId);

    return ranking;
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
    const [ranking, votingPower, collection, isFinished] = await Promise.all([
      this.flowService.getRanking(userId, collectionId || null),
      this.flowService.getCollectionVotingPower(collectionId || null, userId),
      this.prismaService.project.findFirst({
        where: { id: collectionId || -1 },
      }),
      true,
    ]);

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

    return {
      ranking,
      hasRanking: true,
      isFinished,
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

  // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Post('/break')
  // async break(@Body() { ranking: stringifedRanking }: { ranking: string }) {
  //   // console.log(stringifedRanking);
  //   const result = this.flowService.breakOverallRankingDown({
  //     type: 'collection',
  //     name: 'root',
  //     id: -1,
  //     share: 1,
  //     ranking: stringifedRanking as any,
  //   });
  //   return result;
  // }

  @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  @Post('/ranking')
  async submitEditedRanking(@Req() { userId }: AuthedReq, @Body() input: any) {
    // validate that sigma of items is equal to parent
    // no negative number
    // all siblings are present

    // console.log(input);

    // console.log(this.flowService.breakOverallRankingDown(input.shares as any));

    await this.flowService.addManyShares(
      this.flowService
        .breakOverallRankingDown(input.shares as any)
        .reduce(
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
  // // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Get('/ts')
  // async getLastActivity(@Req() { userId }: AuthedReq) {
  //   const timestamp = await this.flowService.getLastActivityTimestamp(userId);
  //   return timestamp;
  // }

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
    // await this.prismaService.expertiseVote.deleteMany({
    //   where: { user_id: userId },
    // });

    // await this.prismaService.vote.deleteMany({
    //   where: { user_id: userId },
    // });

    // await this.prismaService.userCollectionFinish.deleteMany({
    //   where: { user_id: userId },
    // });

    await this.prismaService.share.deleteMany({
      where: { user_id: userId },
    });
    // }
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
  //   const allInvalidVotes = await this.prismaService.vote.findMany({
  //     select: { id: true, project1_id: true, project2_id: true },
  //     where: {
  //       project1_id: { lt: this.prismaService.vote.fields.project2_id },
  //     },
  //   });

  //   console.log('number of votes:', allInvalidVotes.length);

  // for (let i = 0; i < allInvalidVotes.length; i++) {
  //   const item = allInvalidVotes[i];
  //   console.log('this id was invalid:', item.id);
  //   await this.prismaService.vote.update({
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
