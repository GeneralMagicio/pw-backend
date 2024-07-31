import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
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
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { VoteProjectsDTO } from './dto/voteProjects.dto';
import { VoteCollectionsDTO } from './dto/voteCollections.dto';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { PairsResult } from './dto/pairsResult';
import { areEqualNumberArrays, sortProjectId } from 'src/utils';
import {
  DnDBody,
  FinishCollectionBody,
  InclusionProjectBody,
  InclusionProjectsBulkBody,
  RemoveLastVoteDto,
} from './dto/bodies';
import { calculateWeightedLists } from 'src/weighted-api/main';
import { GetBadgesDTO } from 'src/user/dto/ConnectFlowDTOs';
import { getRankingForUser } from 'src/weighted-api/user-based';

@Controller({ path: 'flow' })
export class FlowController {
  private readonly logger = new Logger(FlowController.name);
  constructor(
    private readonly flowService: FlowService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for pinning an JSON object to IPFS (used in attestations)',
  })
  @Post('/pinJSONToIPFS')
  async pinJSONToIPFS(@Body('json') json: object) {
    const hash = await this.flowService.pinJSONToIPFS(json);

    return hash;
  }

  @Get('/isLastLayerCollection')
  async isLastLayerCollection(@Query('cid') collectionId?: number) {
    return this.flowService.isLastLayerCollection(collectionId || null);
  }

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description:
      'Parent id of the collections (skip if you want the top level collections)',
    required: false,
  })
  @ApiOperation({
    summary:
      'Returns the children collections of a collection with their progress status',
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

    const tempOrder = [
      'NFT Collectibles',
      'NFTverse',
      'User & Development experience',
      'Lending & Asset Management',
      'DEXs & Perps',
      'Social Networks & Platforms',
      'DeFi UX',
      'DeFi Ecosystems',
      'Governance & Gov tooling',
      'Web3 Onboarding & Engagement',
      'Cross chain',
    ];

    return collections.sort(
      (a, b) =>
        tempOrder.findIndex((el) => el === a.name) -
        tempOrder.findIndex((el) => el === b.name),
    );
  }

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description: 'Parent id of the collections',
    required: true,
  })
  @ApiOperation({
    summary: 'Returns the projects in a collection',
  })
  @Get('/projects')
  async getProjects(
    @Req() { userId }: AuthedReq,
    @Query('cid') parentId?: number,
  ) {
    if (!parentId) throw new BadRequestException('Please provide a valid cid');
    const projects = await this.flowService.getProjects(
      parentId || null,
      userId,
    );
    return projects;
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two projects',
  })
  @Post('/projects/vote')
  async voteProjects(
    @Req() { userId }: AuthedReq,
    @Body() { project1Id, project2Id, pickedId }: VoteProjectsDTO,
  ) {
    const [id1, id2] = sortProjectId(project1Id, project2Id);
    return await this.flowService.voteForProjects(userId, id1, id2, pickedId);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
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

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
  @Get('/temp/test')
  async test() {
    return await this.flowService.justTesting();
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
  @Get('/temp/test3')
  async test3() {
    return await this.flowService.populateInitialRanking(1);
  }

  // @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
  @Get('/temp/api')
  async test4() {
    const lists = await calculateWeightedLists(
      this.flowService.getBadgesFromDb,
    );

    return lists;
  }

  // @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
  @Get('/api')
  async getUserOverallRanking(@Query() { address }: GetBadgesDTO) {
    const lists = await getRankingForUser(
      this.flowService.getBadgesFromDb,
      address,
    );

    return lists;
  }

  // @Get('/temp/ranking')
  // async test5() {
  //   const ranking = await this.flowService.saveResultsFromVotes(21, 178);

  //   return ranking;
  // }

  // @Get('/temp/finish')
  // async test6() {
  //   const ranking = await this.flowService.finis(21, 178);

  //   return ranking;
  // }

  // @UseGuards(AuthGuard)
  // @ApiOperation({
  //   summary: 'Used for a pairwise vote between two collections',
  // })
  // @Get('/temp/test2')
  // async test2() {
  //   const votes = await this.prismaService.vote.findMany({
  //     where: {
  //       project1: {
  //         parentId: 174,
  //       },
  //     },
  //   });

  //   return votes;
  // }

  @ApiOperation({
    summary: 'Deletes the last vote by the user in a category',
  })
  @UseGuards(AuthGuard)
  @Post('/pairs/back')
  async removeLastVote(
    @Req() { userId }: AuthedReq,
    @Body('cid') { collectionId }: RemoveLastVoteDto,
  ) {
    if (!collectionId) return this.flowService.removeLastVote(userId, null);

    const progressStatus = await this.flowService.getCollectionProgressStatus(
      userId,
      collectionId,
    );

    if (progressStatus !== 'WIP' && progressStatus !== 'WIP - Threshold')
      throw new ForbiddenException(
        "You can only go back in a collection that's WIP or WIP-Threshold",
      );

    await this.flowService.removeLastVote(userId, collectionId);

    return 'Success';
  }

  @ApiQuery({ name: 'cid', description: 'collection id of the pairs' })
  @ApiResponse({
    type: PairsResult,
    status: 200,
    description: 'Returns a pair of comparisons + progress data',
  })
  @ApiOperation({
    summary: 'Returns the next pair for a pairwise vote',
  })
  @UseGuards(AuthGuard)
  @Get('/pairs')
  async getPairs(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    if (!collectionId)
      return this.flowService.getAttestedCollectionPairs(userId);

    const progressStatus = await this.flowService.getCollectionProgressStatus(
      userId,
      collectionId,
    );

    if (
      progressStatus !== 'Filtered' &&
      progressStatus !== 'WIP' &&
      progressStatus !== 'WIP - Threshold'
    )
      throw new ForbiddenException(
        "You can only vote for a collection that's Filtered, WIP or WIP-Threshold",
      );

    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      collectionId,
    );

    return pairs;
  }

  @ApiQuery({
    name: 'cid',
    description:
      'Collection id of the ranking (skip if you look for top level collections)',
    required: false,
  })
  @ApiOperation({
    summary:
      'Returns the ranking within the projects/collections of a parent collection',
  })
  @ApiResponse({
    status: 200,
    description: `There are 5 progress statuses:\n
                  1- Pending: No votes has been cast in the collection\n
                  2- WIP: some votes has been cast in the collection\n
                  3- WIP-Threshold: The number of votes cast has exceeded the threshold number\n
                  4- Finished: The collection has been marked "Finished" by the User\n
                  5- The collection has been attested to the EAS`,
  })
  @UseGuards(AuthGuard)
  @Get('/ranking')
  async getRanking(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
  ) {
    const isLastLayerCollection = await this.flowService.isLastLayerCollection(
      collectionId || null,
    );

    // if (collectionId && status) {
    //   const hasThresholdVotes = await this.flowService.hasThresholdVotes(
    //     collectionId,
    //     userId,
    //   );

    //   if (
    //     !hasThresholdVotes &&
    //     isLastLayerCollection &&
    //     (status === "")
    //   )
    //     throw new ForbiddenException('Threshold votes missing');
    // }

    // let isSaved = true;
    if (collectionId && isLastLayerCollection) {
      const item = await this.flowService.isCollectionFinished(
        userId,
        collectionId,
      );

      if (!item)
        throw new ForbiddenException(
          'There is no ranking for un-finished collections',
        );
    }

    // if (!isSaved) {
    //   await Promise.all([
    //     this.flowService.saveResultsFromVotes(userId, collectionId || null),
    //     // this.prismaService.userCollectionFinish.create({
    //     //   data: { userId: userId, collectionId: collectionId! },
    //     // }),
    //   ]);
    // }

    // if (!collectionId && collectionId !== 0) {
    //   const alreadySaved = await this.prismaService.share.findFirst({
    //     where: {
    //       project: {
    //         parentId: null,
    //       },
    //     },
    // });
    // if (alreadySaved === null)
    //   await this.flowService.saveResultsFromVotes(userId, null);
    // }

    const [ranking, rank, collection, progress] = await Promise.all([
      this.flowService.getRanking(userId, collectionId || null),
      collectionId
        ? this.prismaService.rank.findUnique({
            where: { userId_projectId: { userId, projectId: collectionId } },
          })
        : 1,
      this.prismaService.project.findFirst({
        where: { id: collectionId || -1 },
      }),
      this.flowService.getCollectionProgressStatus(userId, collectionId || 1),
    ]);

    // if (collectionId) {
    //   await this.prismaService.userCollectionFinish.upsert({
    //     create: { userId: userId, collectionId: collectionId },
    //     update: { userId: userId, collectionId: collectionId },
    //     where: {
    //       userId_collectionId: {
    //         userId: userId,
    //         collectionId: collectionId,
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
      rank,
      id: collection?.id || -1,
    };
  }

  // @UseGuards(AuthGuard)
  // @ApiOperation({
  //   summary: 'Returns the ranking among all the projects',
  // })
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Get('/ranking/overall')
  // async getOverallRanking(@Req() { userId }: AuthedReq) {
  //   const result = await this.flowService.getOverallRanking(userId);
  //   return result;
  // }

  // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Post('/custom/projects')
  // async getProjectsFromUIDs(
  //   // @Req() { userId }: AuthedReq,
  //   @Body('uids') uids: string[],
  // ) {
  //   if (!uids) throw new BadRequestException('You need to supplu a uids array');
  //   const projects = await this.prismaService.project.findMany({
  //     where: {
  //       RPGF4Id: {
  //         in: uids,
  //       },
  //       type: 'project',
  //     },
  //   });
  //   return projects;
  // }

  // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Get('/ranking/overall/excel')
  // async getOverallRankingExcelSheet(@Req() { userId }: AuthedReq) {
  //   const temp = await this.flowService.getOverallRanking(userId);

  //   const payload = this.flowService.flattenForExcel(
  //     {
  //       ranking: temp,
  //     } as CollectionRanking,
  //     {
  //       ranking: temp,
  //     } as CollectionRanking,
  //   );

  //   // Convert data to worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(payload);

  //   // Create a new Workbook
  //   const workbook = XLSX.utils.book_new();

  //   // Append the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

  //   // Write the workbook to an Excel file
  //   const fileName = `${Date.now()}-${userId}-output.xlsx`;

  //   XLSX.writeFile(workbook, fileName);

  //   const pinataUrl = await this.flowService.uploadFileToPinata(fileName);

  //   // remove the excel file
  //   fs.unlink(fileName, (err) => {
  //     if (err) {
  //       console.error('An error occurred:', err);
  //     } else {
  //       console.log('File was deleted successfully');
  //     }
  //   });

  //   return pinataUrl;
  // }

  // @UseGuards(AuthGuard)
  // // @ApiResponse({ status: 200, description: 'Overall ranking' })
  // @Post('/dnd')
  // async submitEditedRanking(
  //   @Req() { userId }: AuthedReq,
  //   @Body()
  //   { collectionId, projectIds }: DnDBody,
  // ) {
  //   // userId = 5;
  //   const [includedProjects, shares] = await Promise.all([
  //     this.flowService.getIncludedProjectIds(userId, collectionId),
  //     this.prismaService.share.findMany({
  //       select: {
  //         share: true,
  //         projectId: true,
  //       },
  //       where: {
  //         userId,
  //         project: { parentId: collectionId },
  //       },
  //       orderBy: {
  //         share: 'desc',
  //       },
  //     }),
  //   ]);

  //   const includedProjectsShares = shares.filter((item) =>
  //     includedProjects.includes(item.projectId),
  //   );

  //   console.log('pids:', projectIds);
  //   console.log('included project shares', includedProjectsShares);

  //   if (
  //     !areEqualNumberArrays(
  //       projectIds,
  //       includedProjectsShares.map((item) => item.projectId),
  //     )
  //   ) {
  //     throw new BadRequestException(
  //       'All included projects should be in the input',
  //     );
  //   }

  //   const promises = includedProjectsShares.map(async (item, index) =>
  //     this.prismaService.share.update({
  //       where: {
  //         userId_projectId: {
  //           userId,
  //           projectId: projectIds[index],
  //         },
  //       },
  //       data: {
  //         share: item.share,
  //       },
  //     }),
  //   );

  //   await Promise.all(promises);

  //   return 'success';
  // }

  @UseGuards(AuthGuard)
  @Post('/dnd')
  async dndBulk(
    @Req() { userId }: AuthedReq,
    @Body()
    { projectIds, collectionId }: DnDBody,
  ) {
    await this.flowService.setInclusionStateBulk(
      projectIds,
      userId,
      collectionId,
    );

    const promises = projectIds.map((projectId, index) =>
      this.prismaService.rank.update({
        where: { userId_projectId: { projectId, userId } },
        data: { rank: index + 1 },
      }),
    );

    await Promise.all(promises);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Notifies the server that the user has done an attestation for a collection',
  })
  @Post('/reportAttest')
  async reportAttestations(
    @Req() { userId }: AuthedReq,
    @Body() { cid }: FinishCollectionBody,
  ) {
    const isFinished = await this.flowService.isCollectionFinished(userId, cid);

    if (!isFinished)
      throw new ForbiddenException(
        'You can not attest a collection which is yet to be finished',
      );

    await this.prismaService.userAttestation.upsert({
      where: {
        userId_collectionId: {
          userId: userId,
          collectionId: cid,
        },
      },
      create: {
        userId: userId,
        collectionId: cid,
      },
      update: {
        userId: userId,
        collectionId: cid,
      },
    });
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Notifies the server that the user has completed filtering the projects in a collection',
  })
  @Post('/mark-filtered')
  async markFiltered(
    @Req() { userId }: AuthedReq,
    @Body() { cid }: FinishCollectionBody,
  ) {
    await this.flowService.markCollectionsFiltered(userId, cid);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Exclude a project from subsequent pairwise ranking',
  })
  @Post('/projects/set-inclusion')
  async excludeProjects(
    @Req() { userId }: AuthedReq,
    @Body() { id, state }: InclusionProjectBody,
  ) {
    await this.flowService.setInclusionState(userId, id, state);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Exclude a project from subsequent pairwise ranking',
  })
  @Post('/projects/set-inclusion-bulk')
  async setInclusionBulk(
    @Req() { userId }: AuthedReq,
    @Body() { ids, collectionId }: InclusionProjectsBulkBody,
  ) {
    await this.flowService.setInclusionStateBulk(ids, userId, collectionId);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Used to mark a collection status "finished". After a collection is finished, voting is not longer possible in it',
  })
  @Post('/finish')
  async finishCollections(
    @Req() { userId }: AuthedReq,
    @Body() { cid }: FinishCollectionBody,
  ) {
    await this.flowService.finishCollection(userId, cid);

    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Use it at your own risk for testing. It will remove all the inclusions associated with your account',
  })
  // @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/temp-reset-inclusions')
  async resetInclusions(@Req() { userId }: AuthedReq) {
    await this.prismaService.projectInclusion.deleteMany({
      where: {
        userId,
      },
    });

    await this.prismaService.userCollectionFiltered.deleteMany({
      where: {
        userId,
      },
    });
  }

  // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  // @Get('/test/pa2')
  // async testtest2() {
  //   const userId = 48;
  //   const collectionId = 170;

  //   const [variable1, variable2, variable3, variable4, variable5, variable6] =
  //     await Promise.all([
  //       this.flowService.isCollectionAttested(userId, collectionId),
  //       this.flowService.isCollectionFinished(userId, collectionId),
  //       this.flowService.hasThresholdVotes(collectionId, userId),
  //       this.flowService.isCollectionStarted(userId, collectionId),
  //       this.flowService.isCollectionFiltered(userId, collectionId),
  //       this.prismaService.projectInclusion.findFirst({
  //         where: { userId, project: { parentId: collectionId } },
  //       }),
  //     ]);
  //   return { variable1, variable2, variable3, variable4, variable5, variable6 };
  // }

  // // @UseGuards(AuthGuard)
  // @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  // @Get('/test/pa')
  // async testtest() {
  //   const userId = 48;
  //   const collectionId = 170;

  //   const variable1 = await this.flowService.isCollectionAttested(
  //     userId,
  //     collectionId,
  //   );
  //   const variable2 = await this.flowService.isCollectionFinished(
  //     userId,
  //     collectionId,
  //   );
  //   const variable3 = await this.flowService.hasThresholdVotes(
  //     collectionId,
  //     userId,
  //   );
  //   const variable4 = await this.flowService.isCollectionStarted(
  //     userId,
  //     collectionId,
  //   );
  //   const variable5 = await this.flowService.isCollectionFiltered(
  //     userId,
  //     collectionId,
  //   );
  //   const variable6 = await this.prismaService.projectInclusion.findFirst({
  //     where: { userId, project: { parentId: collectionId } },
  //   });

  //   return { variable1, variable2, variable3, variable4, variable5, variable6 };
  // }

  // @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Use it at your own risk for testing. It will remove all the data associated with your account',
  })
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata(@Req() { userId }: AuthedReq) {
    // for (let i = 2; i < 9; i++) {
    const user = await this.prismaService.user.findFirst({
      select: { id: true },
      where: { address: '0x9cb5129b4c710dB85F1dcd4071CB5f777e5B7612' },
    });

    // console.log(user?.id);

    if (user && !userId) {
      userId = user?.id;
      console.log(user.id);
    } else if (!user && !userId) return;

    // userId = 448;

    await this.prismaService.nonce.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.rank.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.userCollectionFiltered.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.projectInclusion.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.vote.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.userCollectionFinish.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.userAttestation.deleteMany({
      where: { userId: userId },
    });

    await this.prismaService.otp.deleteMany({
      where: { userId: userId },
    });

    // await this.prismaService.user.update({
    //   where: { id: userId },
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   data: { identity: null, badges: null },
    // });

    await this.prismaService.user.deleteMany({
      where: { id: userId },
    });

    // }
  }
}
