import { Controller, Get, Logger, Res } from '@nestjs/common';

import { AnalyticsService } from './analytics.service';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { FlowService } from 'src/flow/flow.service';
import { BHs } from './badgeholderts';

@Controller({ path: 'analytics' })
export class AnalyticsController {
  private readonly logger = new Logger(AnalyticsController.name);
  private badgeholders = BHs.map((item) => item.recipient);
  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly prismaService: PrismaService,
    private readonly flowService: FlowService,
  ) {}

  @Get('users')
  async countTotalUsers(@Res() res: Response) {
    const users = await this.prismaService.user.findMany({
      distinct: ['address'],
    });
    const addresses = users.map((item) => item.address);
    const bhs = addresses.filter((val) => this.badgeholders.includes(val));

    return res.send(
      `Number of users as of ${new Date().toUTCString()}: ${users.length}<br/>
      Number of badgeholders as of ${new Date().toUTCString()}: ${bhs.length}
      `,
    );
  }

  @Get('lists')
  async countTotalLists(@Res() res: Response) {
    const lists = await this.prismaService.userAttestation.findMany({
      include: {
        user: true,
      },
    });

    const addresses = lists.map((list) => list.user.address);
    const bhs = addresses.filter((val) => this.badgeholders.includes(val));
    // const bhs = addresses.filter((val) => this.badgeholders.includes(val));

    return res.send(
      `
      Number of created lists as of ${new Date().toUTCString()}: ${
        lists.length
      }<br/>
      Number of created lists by badgeholders as of ${new Date().toUTCString()}: ${
        bhs.length
      }
      
      `,
    );
  }

  @Get('unlockeds')
  async countTotalUnlockeds(@Res() res: Response) {
    const users = await this.prismaService.user.findMany();

    const finishedCollections =
      await this.prismaService.userCollectionFinish.findMany({
        include: {
          user: true,
        },
      });

    const addresses = users.map((item) => item.address);
    const bhs = addresses.filter((val) => this.badgeholders.includes(val));

    const collectionAddresses = finishedCollections.map(
      (item) => item.user.address,
    );
    const bhsUnlockeds = collectionAddresses.filter((el) =>
      this.badgeholders.includes(el),
    );
    // const numOfTrues = lists.filter((el) => el === true).length;

    return res.send(
      `Number of unlocked areas as of ${new Date().toUTCString()}: ${
        users.length + finishedCollections.length
      }<br/>
      Number of unlocked areas by badgeholders as of ${new Date().toUTCString()}: ${
        bhs.length + bhsUnlockeds.length
      }
      
      `,
    );
  }

  @Get('votes')
  async countTotalVotes(@Res() res: Response) {
    const votes = await this.prismaService.vote.findMany({
      include: { user: true },
    });

    const addresses = votes.map((item) => item.user.address);
    const bhs = addresses.filter((el) => this.badgeholders.includes(el));
    return res.send(
      `
      Number of pairwise votes as of ${new Date().toUTCString()}: ${
        votes.length
      }<br/>
      Number of pairwise votes by badgeholders as of ${new Date().toUTCString()}: ${
        bhs.length
      }
      `,
    );
  }
}
