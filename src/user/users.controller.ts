import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  InternalServerErrorException,
  Logger,
  Post,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
  Headers,
} from '@nestjs/common';

import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import {
  GetBadgesDTO,
  StoreBadgesAndIdentityDTO,
  StoreBadgesDTO,
  StoreIdentityDTO,
} from './dto/ConnectFlowDTOs';
import { getBadges } from 'src/utils/badges/readBadges';
import { verifySignature } from 'src/utils/badges';
import { PrismaService } from 'src/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Prisma } from '@prisma/client';
import { snapshots } from 'src/utils/badges/snapshot';

@Controller({ path: 'user' })
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly prismaService: PrismaService) {}

  @UseGuards(AuthGuard)
  @Post('/store-badges-identity')
  async storeBadgesAndIdentity(
    @Req() { userId }: AuthedReq,
    @Body() { mainAddress, signature, identity }: StoreBadgesAndIdentityDTO,
  ) {
    if (
      !(await verifySignature(
        'Sign this message to generate your Semaphore identity.',
        signature,
        mainAddress,
      ))
    )
      throw new UnauthorizedException('Signature invalid');

    // if (!verifyIdentity(identity))
    //   throw new UnauthorizedException('Invalid identity format');

    const user = await this.prismaService.user.findUnique({
      select: { badges: true, identity: true, opAddress: true },
      where: { id: userId },
    });

    if (!user) throw new InternalServerErrorException("User doesn't exist");

    if (user.identity?.valueOf() || user.badges?.valueOf() || user.opAddress)
      throw new ForbiddenException('User has already connected');

    const badges = await getBadges(snapshots, mainAddress);

    try {
      await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          identity,
          badges: badges || {},
          opAddress: mainAddress,
        },
      });
    } catch (e: unknown) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException('This eth address is already connected');
      }
    }

    return 'success';
  }

  @UseGuards(AuthGuard)
  @Post('/store-badges')
  async storeBadges(
    @Req() { userId }: AuthedReq,
    @Body() { mainAddress, signature }: StoreBadgesDTO,
  ) {
    if (
      !(await verifySignature(
        'Sign this message to generate your Semaphore identity.',
        signature,
        mainAddress,
      ))
    )
      throw new UnauthorizedException('Signature invalid');

    const badges = await getBadges(snapshots, mainAddress);

    const user = await this.prismaService.user.findUnique({
      select: { badges: true, identity: true },
      where: { id: userId },
    });

    if (!user) throw new InternalServerErrorException("User doesn't exist");

    if (user.badges?.valueOf())
      throw new ForbiddenException('User has already connected');

    if (!user.identity?.valueOf)
      throw new BadRequestException('You need to insert your identity first');

    try {
      await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          badges: badges || {},
          opAddress: mainAddress,
        },
      });
    } catch (e: unknown) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException('This eth address is already connected');
      }
    }

    return badges;
  }

  @UseGuards(AuthGuard)
  @Get('/badges')
  async getBadges(@Req() { userId }: AuthedReq) {
    const res = await this.prismaService.user.findUnique({
      select: { badges: true },
      where: { id: userId },
    });

    return res?.badges || null;
  }

  @UseGuards(AuthGuard)
  @Get('/identity')
  async getIdentity(@Req() { userId }: AuthedReq) {
    const res = await this.prismaService.user.findUnique({
      select: { identity: true },
      where: { id: userId },
    });

    return res?.identity || null;
  }

  // @Get('/public/duplicates')
  // async getDuplicates() {
  //   snapshotPoints.forEach((point, index) => {
  //     const newIndex = snapshotPoints.findIndex(
  //       (el, i2) =>
  //         index !== i2 && point.User.toLowerCase() === el.User.toLowerCase(),
  //     );

  //     if (newIndex !== -1) console.log(snapshotPoints[newIndex]);
  //   });
  // }

  @Get('/public/badges')
  async getPublicBadges(@Query() { address }: GetBadgesDTO) {
    const badges = await getBadges(snapshots, address);

    return badges || {};
  }

  @Get('/smart-wallet-badges')
  async getSmartWalletBadges(@Headers('authorization') authorization: string) {
    if (authorization !== process.env.Smart_Wallet_Badges_Authorization)
      throw new UnauthorizedException();
    const userBadges = await this.prismaService.user.findMany({
      select: {
        address: true,
        badges: true,
      },
      where: {
        badges: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          not: null,
        },
      },
    });

    return userBadges;
  }

  @UseGuards(AuthGuard)
  @Post('/store-identity')
  async storeIdentity(
    @Req() { userId }: AuthedReq,
    @Body() { identity }: StoreIdentityDTO,
  ) {
    // if (!verifyIdentity(identity))
    //   throw new UnauthorizedException('Invalid identity format');

    const user = await this.prismaService.user.findUnique({
      select: { badges: true, identity: true },
      where: { id: userId },
    });

    if (!user) throw new InternalServerErrorException("User doesn't exist");

    if (user.identity?.valueOf())
      throw new ForbiddenException('User has already connected');

    try {
      await this.prismaService.user.update({
        where: {
          id: userId,
        },
        data: {
          identity,
        },
      });
    } catch (e: unknown) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException('This eth address is already connected');
      }
    }

    return 'success';
  }

  @UseGuards(AuthGuard)
  @Post('/continue-guest')
  async continueGuest(@Req() { userId }: AuthedReq) {
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        identity: {},
        badges: {},
      },
    });

    return 'success';
  }
}
