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
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { VoteProjectsDTO } from './dto/voteProjects.dto';
import { VoteCollectionsDTO } from './dto/voteCollections.dto';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { PairsResult } from './dto/pairsResult';
import { sortProjectId } from 'src/utils';
import { RemoveLastVoteDto, SetCoIDto } from './dto/bodies';
import { AgoraBallotPost } from 'src/rpgf5-data-import/submit';
import { projects as osradProjects } from 'src/rpgf5-data-import/osrad';
import { projects as eccProjects } from 'src/rpgf5-data-import/ecc';
import { projects as ostProjects } from 'src/rpgf5-data-import/ost';

export const getAllProjects = (category: number) => {
  switch (category) {
    case 1:
      return eccProjects;
    case 2:
      return ostProjects;
    case 3:
      return osradProjects;
    default:
      throw new Error(`Invalid category id ${category}`);
  }
};

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

    return collections;
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
  @Post('/mark-CoI')
  async markCoI(@Req() { userId }: AuthedReq, @Body() { pid }: SetCoIDto) {
    await this.flowService.setCoI(userId, pid);
    return 'Success';
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two projects',
  })
  @Post('/projects/vote')
  async voteProjects(
    @Req() { userId }: AuthedReq,
    @Body()
    {
      project1Id,
      project2Id,
      pickedId,
      project1Stars,
      project2Stars,
    }: VoteProjectsDTO,
  ) {
    const promises = [];
    const [id1, id2] = sortProjectId(project1Id, project2Id);
    if (project1Stars)
      promises.push(
        this.flowService.setRating(project1Id, userId, project1Stars),
      );
    if (project2Stars)
      promises.push(
        this.flowService.setRating(project2Id, userId, project2Stars),
      );
    promises.push(this.flowService.voteForProjects(userId, id1, id2, pickedId));

    await Promise.all(promises);
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Used for a pairwise vote between two collections',
  })
  @Get('/ballot')
  async getBallot(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId: number,
  ) {
    if (!collectionId)
      throw new BadRequestException('You need to supply a collection id');
    const ranking = await this.flowService.getRanking(userId, collectionId);

    const ballot: AgoraBallotPost = { projects: [] };

    ballot.projects = ranking.map((el) => ({
      project_id: el.RPGF5Id!,
      allocation: (el.share * 100).toFixed(3),
      impact: el.star === null ? 3 : el.star,
    }));

    // Add spam projects for staging:

    const spams = getAllProjects(collectionId)
      .filter(
        (el) => !ballot.projects.find((item) => item.project_id === el.id),
      )
      .map((item) => ({ project_id: item.id, allocation: `0`, impact: 3 }));

    ballot.projects = [...ballot.projects, ...spams];

    return ballot;
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

  @ApiOperation({
    summary: 'Deletes the last vote by the user in a category',
  })
  @UseGuards(AuthGuard)
  @Post('/pairs/back')
  async removeLastVote(
    @Req() { userId }: AuthedReq,
    @Body() { collectionId }: RemoveLastVoteDto,
  ) {
    if (collectionId === null) return this.flowService.undo(userId, null);

    const progressStatus = await this.flowService.getCollectionProgressStatus(
      userId,
      collectionId,
    );

    if (progressStatus !== 'WIP' && progressStatus !== 'WIP - Threshold')
      throw new ForbiddenException(
        "You can only go back in a collection that's WIP or WIP-Threshold",
      );

    await this.flowService.undo(userId, collectionId);

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
  @Get('/pairs-for-project')
  async getPairsForProject(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId?: number,
    @Query('pid') projectId?: number,
  ) {
    if (!collectionId) throw new BadRequestException('Please provide a cid');
    if (!projectId)
      throw new BadRequestException('Please provide a project id');

    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      projectId,
      collectionId,
    );

    return pairs;
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
    if (!collectionId) throw new BadRequestException('Please provide a cid');

    const pairs: PairsResult = await this.flowService.getPairs(
      userId,
      undefined,
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
    // const isLastLayerCollection = await this.flowService.isLastLayerCollection(
    //   collectionId || null,
    // );

    // if (collectionId && isLastLayerCollection) {
    //   const item = await this.flowService.isCollectionFinished(
    //     userId,
    //     collectionId,
    //   );

    //   if (!item)
    //     throw new ForbiddenException(
    //       'There is no ranking for un-finished collections',
    //     );
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

  @UseGuards(AuthGuard)
  @Post('/reset')
  async resetVotes(@Req() { userId }: AuthedReq, @Body('cid') cid: number) {
    await this.prismaService.vote.deleteMany({
      where: {
        userId: userId,
        OR: [
          {
            project1: {
              parentId: cid,
            },
          },
          {
            project2: {
              parentId: cid,
            },
          },
        ],
      },
    });
    await this.prismaService.projectStar.deleteMany({
      where: {
        userId: userId,
        project: {
          parentId: cid,
        },
      },
    });
  }

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary:
      'Use it at your own risk for testing. It will remove all the data associated with your account',
  })
  @ApiResponse({ status: 200, description: 'All your voting data is removed' })
  @Get('/dangerouslyRemoveData')
  async removeMydata(@Req() { userId }: AuthedReq) {
    // for (let i = 2; i < 9; i++) {
    // const user = await this.prismaService.user.findFirst({
    //   select: { id: true },
    //   where: { address: '0x9cb5129b4c710dB85F1dcd4071CB5f777e5B7612' },
    // });

    // // console.log(user?.id);

    // if (user && !userId) {
    //   userId = user?.id;
    //   console.log(user.id);
    // } else if (!user && !userId) return;

    // userId = 448;

    await this.prismaService.vote.deleteMany({
      where: { userId: userId },
    });
    await this.prismaService.projectStar.deleteMany({
      where: { userId: userId },
    });
    await this.prismaService.projectCoI.deleteMany({
      where: { userId: userId },
    });
  }
}
