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
import * as XLSX from 'xlsx';
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
import * as fs from 'fs';

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/pinJSONToIPFS')
  async pinJSONToIPFS(@Body('json') json: object) {
    const hash = await this.flowService.pinJSONToIPFS(json);

    return hash;
  }

  @Get('/isMoon')
  async isMoon(@Query('cid') collectionId?: number) {
    return this.flowService.isMoon(collectionId || null);
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
    const isMoon = await this.flowService.isMoon(collectionId || null);
    if (collectionId) {
      const hasThresholdVotes = await this.flowService.hasThresholdVotes(
        collectionId,
        userId,
      );

      if (!hasThresholdVotes && isMoon)
        throw new ForbiddenException('Threshold votes missing');
    }

    let isSaved = true;
    if (collectionId && isMoon) {
      const item = await this.flowService.isCollectionFinished(
        userId,
        collectionId,
      );

      if (!item) isSaved = false;
    }

    if (!isSaved) {
      await Promise.all([
        this.flowService.saveResultsFromVotes(userId, collectionId || null),
        // this.prismaService.userCollectionFinish.create({
        //   data: { user_id: userId, collection_id: collectionId! },
        // }),
      ]);
    }

    if (!collectionId && collectionId !== 0) {
      const alreadySaved = await this.prismaService.share.findFirst({
        where: {
          project: {
            parentId: null,
          },
        },
      });
      if (alreadySaved === null)
        await this.flowService.saveResultsFromVotes(userId, null);
    }

    const [ranking, votingPower, collection, progress] = await Promise.all([
      this.flowService.getRanking(userId, collectionId || null),
      this.flowService.getCollectionVotingPower(collectionId || null, userId),
      this.prismaService.project.findFirst({
        where: { id: collectionId || -1 },
      }),
      this.flowService.getCollectionProgressStatus(userId, collectionId || 1),
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
      progress,
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
  @ApiResponse({ status: 200, description: 'Overall ranking' })
  @Post('/custom/projects')
  async getProjectsFromUIDs(
    // @Req() { userId }: AuthedReq,
    @Body('uids') uids: string[],
  ) {
    if (!uids) throw new BadRequestException('You need to supplu a uids array');
    const projects = await this.prismaService.project.findMany({
      where: {
        RPGF3Id: {
          in: uids,
        },
        type: 'project',
      },
    });
    return projects;
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Overall ranking' })
  @Get('/ranking/overall/excel')
  async getOverallRankingExcelSheet(@Req() { userId }: AuthedReq) {
    const temp = await this.flowService.getOverallRanking(userId);

    const payload = this.flowService.flattenForExcel(
      {
        ranking: temp,
      } as CollectionRanking,
      {
        ranking: temp,
      } as CollectionRanking,
    );

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(payload);

    // Create a new Workbook
    const workbook = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

    // Write the workbook to an Excel file
    const fileName = `${Date.now()}-${userId}-output.xlsx`;

    XLSX.writeFile(workbook, fileName);

    const pinataUrl = await this.flowService.uploadFileToPinata(fileName);

    // remove the excel file
    fs.unlink(fileName, (err) => {
      if (err) {
        console.error('An error occurred:', err);
      } else {
        console.log('File was deleted successfully');
      }
    });

    return pinataUrl;
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

    // console.log(
    //   lists.reduce(
    //     (acc, curr) => [
    //       ...acc,
    //       ...curr.ranking.map((el) => ({ id: el.id, share: el.share })),
    //     ],
    //     [] as { id: number; share: number }[],
    //   ),
    // );

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

  @UseGuards(AuthGuard)
  @Post('/reportAttest')
  async reportAttestations(
    @Req() { userId }: AuthedReq,
    @Body('cid') cid: number,
  ) {
    const isFinished = await this.flowService.isCollectionFinished(userId, cid);

    if (!isFinished)
      throw new ForbiddenException(
        'You can not attest a collection which is yet to be finished',
      );

    await this.prismaService.userAttestation.upsert({
      where: {
        user_id_collection_id: {
          user_id: userId,
          collection_id: cid,
        },
      },
      create: {
        user_id: userId,
        collection_id: cid,
      },
      update: {
        user_id: userId,
        collection_id: cid,
      },
    });
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @Post('/finish')
  async finishCollections(
    @Req() { userId }: AuthedReq,
    @Body('cid') cid: number,
  ) {
    // const userId = 1;
    const [isFinished, isMoon, hasThresholdVotes] = await Promise.all([
      this.flowService.isCollectionFinished(userId, cid),
      this.flowService.isMoon(cid),
      this.flowService.hasThresholdVotes(cid, userId),
    ]);

    // if (isFinished) throw new ForbiddenException('Already finished');
    if (isFinished) return 'Success';
    if (!isMoon)
      throw new ForbiddenException('Just moon categories are finish-able');
    if (!hasThresholdVotes)
      throw new ForbiddenException(
        'You need to vote for the minimum threshold times',
      );

    await this.prismaService.userCollectionFinish.create({
      data: { user_id: userId, collection_id: cid },
    });

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata(@Req() { userId }: AuthedReq) {
    // for (let i = 2; i < 9; i++) {
    // const user = await this.prismaService.user.findFirst({
    //   select: { id: true },
    //   where: { address: '0xD7542DC0F58095064BFEf6117fac82E4c5504d28' },
    // });

    // console.log(user?.id);

    // const userId = userId || 1;

    // const userId = 3;
    await this.prismaService.nonce.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.expertiseVote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.vote.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.userCollectionFinish.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.userAttestation.deleteMany({
      where: { user_id: userId },
    });

    await this.prismaService.share.deleteMany({
      where: { user_id: userId },
    });
    // }
  }
}
