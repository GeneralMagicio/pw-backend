import {
  Body,
  Controller,
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
    await this.flowService.voteForProjects(
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
    await this.flowService.voteForCollections(
      userId,
      collection1Id,
      collection2Id,
      pickedId,
    );
  }

  @ApiQuery({ name: 'cid', description: 'Collection id of the pairs' })
  @ApiResponse({ status: 200, description: 'Returns 3 pairs of comparisons' })
  @UseGuards(AuthGuard)
  @Get('/projects/pairs')
  async getPairs(
    @Req() { userId }: AuthedReq,
    @Query('cid') collectionId: number,
  ) {
    const pairs = await this.flowService.getPairs(userId, collectionId, 3);

    return pairs;
  }
}
