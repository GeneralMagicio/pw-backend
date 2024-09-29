import { Controller, Get, Logger, Res } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { BadgeData } from 'src/utils/badges/readBadges';

@Controller({ path: 'analytics' })
export class AnalyticsController {
  private readonly logger = new Logger(AnalyticsController.name);
  // private badgeholders = BHs.map((item) => item.recipient);
  constructor(private readonly prismaService: PrismaService) {}

  // @Get('summary')
  // async countTotalUsers(@Res() res: Response) {
  //   const users = await this.prismaService.user.findMany({});

  //   console.log('Total # of users', users.length);

  //   const sHTemp = users.filter(
  //     (user) =>
  //       user.badges &&
  //       user.identity &&
  //       typeof user.badges === 'object' &&
  //       Object.keys(user.badges).length > 0,
  //   );

  //   console.log('Total # of stakeholders:', sHTemp.length);

  //   const guests = users.filter(
  //     (user) =>
  //       user.badges &&
  //       user.identity &&
  //       typeof user.badges === 'object' &&
  //       typeof user.identity === 'object' &&
  //       Object.keys(user.badges).length === 0 &&
  //       Object.keys(user.identity).length === 0,
  //   );

  //   console.log(
  //     'Total # of guests (No wallet connected but interacted with the app):',
  //     guests.length,
  //   );

  //   const noInteractions = users.filter(
  //     (user) => !user.badges && !user.identity,
  //   );

  //   console.log(
  //     'Total # of users that had no interaction after logging:',
  //     noInteractions.length,
  //   );

  //   const stakeholders = sHTemp.map(({ badges, ...el }) => ({
  //     ...el,
  //     badges: badges?.valueOf() as BadgeData,
  //   }));

  //   const recipients = stakeholders.filter(
  //     (el) => el.badges.recipientsPoints && el.badges.recipientsPoints > 0,
  //   );

  //   const holders = stakeholders.filter(
  //     (el) => el.badges.holderPoints && el.badges.holderPoints > 0,
  //   );

  //   const badgeHolders = stakeholders.filter(
  //     (el) => el.badges.badgeholderPoints && el.badges.badgeholderPoints > 0,
  //   );

  //   const delegates = stakeholders.filter(
  //     (el) => el.badges.delegatePoints && el.badges.delegatePoints > 0,
  //   );

  //   const recipientAttests = await this.prismaService.userAttestation.findMany({
  //     where: {
  //       userId: { in: recipients.map((el) => el.id) },
  //     },
  //   });

  //   const holderAttestations =
  //     await this.prismaService.userAttestation.findMany({
  //       where: {
  //         userId: { in: holders.map((el) => el.id) },
  //       },
  //     });

  //   const badgeHolderAttestations =
  //     await this.prismaService.userAttestation.findMany({
  //       where: {
  //         userId: { in: badgeHolders.map((el) => el.id) },
  //       },
  //     });

  //   const delegateAttestations =
  //     await this.prismaService.userAttestation.findMany({
  //       where: {
  //         userId: { in: delegates.map((el) => el.id) },
  //       },
  //     });

  //   const recipientCategories =
  //     await this.prismaService.userCollectionFinish.findMany({
  //       where: { userId: { in: recipients.map((el) => el.id) } },
  //     });

  //   const holderCategories =
  //     await this.prismaService.userCollectionFinish.findMany({
  //       where: { userId: { in: holders.map((el) => el.id) } },
  //     });

  //   const badgeHolderCategories =
  //     await this.prismaService.userCollectionFinish.findMany({
  //       where: { userId: { in: badgeHolders.map((el) => el.id) } },
  //     });

  //   const delegateCategories =
  //     await this.prismaService.userCollectionFinish.findMany({
  //       where: { userId: { in: delegates.map((el) => el.id) } },
  //     });

  //   console.log('Number of users with the recipient badge:', recipients.length);
  //   console.log('Number of category completed:', recipientCategories.length);
  //   console.log('Number of their votes:', recipientAttests.length);

  //   console.log();

  //   console.log('Number of users with the holder badge:', holders.length);
  //   console.log('Number of category completed:', holderCategories.length);
  //   console.log('Number of their votes:', holderAttestations.length);

  //   console.log();

  //   console.log(
  //     'Number of users with the badge-holder badge:',
  //     badgeHolders.length,
  //   );
  //   console.log('Number of category completed:', badgeHolderCategories.length);
  //   console.log('Number of their votes:', badgeHolderAttestations.length);

  //   console.log();

  //   console.log('Number of users with the delegate badge:', delegates.length);
  //   console.log('Number of category completed:', delegateCategories.length);
  //   console.log('Number of their votes:', delegateAttestations.length);

  //   return 'Success';
  // }

  // @Get('cat-sum')
  // async categoryBasedVotes(@Res() res: Response) {
  //   const users = await this.prismaService.user.findMany({});
  //   const categories = await this.prismaService.project.findMany({
  //     select: { id: true, name: true },
  //     where: { type: 'collection' },
  //   });

  //   const sHTemp = users.filter(
  //     (user) =>
  //       user.badges &&
  //       user.identity &&
  //       typeof user.badges === 'object' &&
  //       Object.keys(user.badges).length > 0,
  //   );

  //   const stakeholders = sHTemp.map(({ badges, ...el }) => ({
  //     ...el,
  //     badges: badges?.valueOf() as BadgeData,
  //   }));

  //   const recipients = stakeholders.filter(
  //     (el) => el.badges.recipientsPoints && el.badges.recipientsPoints > 0,
  //   );

  //   const holders = stakeholders.filter(
  //     (el) => el.badges.holderPoints && el.badges.holderPoints > 0,
  //   );

  //   const badgeHolders = stakeholders.filter(
  //     (el) => el.badges.badgeholderPoints && el.badges.badgeholderPoints > 0,
  //   );

  //   const delegates = stakeholders.filter(
  //     (el) => el.badges.delegatePoints && el.badges.delegatePoints > 0,
  //   );

  //   const targetDate = new Date(Date.UTC(2024, 6, 17, 14, 0, 0)); // Note: Months are 0-indexed in JavaScript Date

  //   for (const category of categories) {
  //     const votes = await this.prismaService.userAttestation.findMany({
  //       where: {
  //         collectionId: category.id,
  //         // createdAt: { lte: targetDate },
  //       },
  //     });

  //     console.log('Category:', category.name);
  //     console.log('Total votes:', votes.length);
  //     console.log(
  //       `Votes from recipients ${
  //         votes.filter(
  //           (el) =>
  //             recipients.findIndex((user) => user.id === el.userId) !== -1,
  //         ).length
  //       }`,
  //     );
  //     console.log(
  //       `Votes from holders ${
  //         votes.filter(
  //           (el) => holders.findIndex((user) => user.id === el.userId) !== -1,
  //         ).length
  //       }`,
  //     );
  //     console.log(
  //       `Votes from badgeholders ${
  //         votes.filter(
  //           (el) =>
  //             badgeHolders.findIndex((user) => user.id === el.userId) !== -1,
  //         ).length
  //       }`,
  //     );
  //     console.log(
  //       `Votes from delegates ${
  //         votes.filter(
  //           (el) => delegates.findIndex((user) => user.id === el.userId) !== -1,
  //         ).length
  //       }`,
  //     );
  //     console.log();
  //   }

  //   return 'Success';
  // }
}
