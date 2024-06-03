import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { StoreBadgesDTO } from './dto/ConnectFlowDTOs';
import { getBadges, processedCSV } from 'src/utils/badges/readBadges';
import { verifySignature } from 'src/utils/badges';

@Controller({ path: 'user' })
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Post('/store-badges')
  async storeBadges(
    @Req() { userId }: AuthedReq,
    @Body() { mainAddress, signature }: StoreBadgesDTO,
  ) {
    if (!(await verifySignature('Pairwise', signature, mainAddress)))
      throw new UnauthorizedException('Signature invalid');

    const badges = getBadges(processedCSV, mainAddress);

    return badges;
  }

  // @UseGuards(AuthGuard)
  @Get('/badges')
  async storeIdentity(
    @Req() { userId }: AuthedReq,
    @Body() { mainAddress, signature }: StoreBadgesDTO,
  ) {
    // Do some custom identity verification

    const badges = getBadges(processedCSV, mainAddress);

    return badges;
  }
}
