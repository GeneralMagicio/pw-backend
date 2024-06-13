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
  StoreBadgesDTO,
  StoreIdentityDTO,
} from './dto/ConnectFlowDTOs';
import { getBadges } from 'src/utils/badges/readBadges';
import { verifySignature } from 'src/utils/badges';
import { PrismaService } from 'src/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Prisma } from '@prisma/client';
import { snapshotPoints } from 'src/utils/badges/snapshot';

@Controller({ path: 'user' })
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly prismaService: PrismaService) {}

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

    const badges = await getBadges(snapshotPoints, mainAddress);

    if (!badges) throw new ForbiddenException('Address is not a badge-holder');

    const user = await this.prismaService.user.findUnique({
      select: { badges: true, identity: true },
      where: { id: userId },
    });

    if (!user) throw new InternalServerErrorException("User doesn't exist");

    if (user.badges?.valueOf())
      throw new ForbiddenException('User has already connected');

    if (!user.identity?.valueOf)
      throw new BadRequestException('You need to insert your identity first');

    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        badges,
      },
    });

    return badges;
  }

  @UseGuards(AuthGuard)
  @Get('/badges')
  async getBadges(@Req() { userId }: AuthedReq) {
    const res = await this.prismaService.user.findUnique({
      select: { badges: true },
      where: { id: userId },
    });

    return res?.badges || {};
  }

  @Get('/public/badges')
  async getPublicBadges(@Query() { address }: GetBadgesDTO) {
    const badges = await getBadges(snapshotPoints, address);

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
}
