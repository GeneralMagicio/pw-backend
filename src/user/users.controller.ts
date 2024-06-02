import { Body, Controller, Logger, Post, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';
import { StoreBadgesDTO } from './dto/ConnectFlowDTOs';
import { getBadges, processedCSV } from 'src/utils/badges/readBadges';

@Controller({ path: 'user' })
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Post('/store-badges')
  async getProjects(
    @Req() { userId }: AuthedReq,
    @Body() { mainAddress }: StoreBadgesDTO,
  ) {
    const badges = getBadges(processedCSV, mainAddress);

    return badges;
  }
}
