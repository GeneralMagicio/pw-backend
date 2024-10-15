import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { getBadges } from 'src/utils/badges/readBadges';
import { snapshots } from 'src/utils/badges/snapshot';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private prismaService: PrismaService) {}

  create = async ({ address }: { address: string }): Promise<User | null> => {
    const badges = (await getBadges(snapshots, address)) ?? {};

    return this.prismaService.user.create({
      data: { address, badges },
    });
  };
}
