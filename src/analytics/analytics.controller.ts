import { Controller, Get, Logger, Res } from '@nestjs/common';

import { AnalyticsService } from './analytics.service';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { FlowService } from 'src/flow/flow.service';

@Controller({ path: 'analytics' })
export class AnalyticsController {
  private readonly logger = new Logger(AnalyticsController.name);
  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly prismaService: PrismaService,
    private readonly flowService: FlowService,
  ) {}

  @Get('users')
  async countTotalUsers(@Res() res: Response) {
    const users = await this.prismaService.user.count();

    return res.send(
      `Number of users as of ${new Date().toUTCString()}: ${users}`,
    );
  }

  @Get('lists')
  async countTotalLists(@Res() res: Response) {
    const lists = await this.prismaService.userAttestation.count();

    // const lists = await Promise.all(
    //   users.map(({ id }) => this.flowService.hasAnsweredExpertise(id)),
    // );

    // const numOfTrues = lists.filter((el) => el === true).length;

    return res.send(
      `Number of created lists as of ${new Date().toUTCString()}: ${lists}`,
    );
  }

  @Get('unlockeds')
  async countTotalUnlockeds(@Res() res: Response) {
    const users = await this.prismaService.user.count();

    const finishedCollections =
      await this.prismaService.userCollectionFinish.count();

    // const numOfTrues = lists.filter((el) => el === true).length;

    return res.send(
      `Number of unlocked areas as of ${new Date().toUTCString()}: ${
        users + finishedCollections
      }`,
    );
  }

  @Get('votes')
  async countTotalVotes(@Res() res: Response) {
    const votes = await this.prismaService.vote.count();

    return res.send(
      `Number of pairwise votes as of ${new Date().toUTCString()}: ${votes}`,
    );
  }
}
