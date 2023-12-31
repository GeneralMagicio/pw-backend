import { Controller, Get, Logger, Param, Req, UseGuards } from '@nestjs/common';

import { CollectionService } from './collection.service';
import { PrismaService } from 'src/prisma.service';
import { ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthedReq } from 'src/utils/types/AuthedReq.type';

@Controller({ path: 'collection' })
export class CollectionController {
  private readonly logger = new Logger(CollectionController.name);
  constructor(
    private readonly collectionService: CollectionService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description: 'id of the collection',
    required: false,
  })
  @Get(':id')
  async getCollections(@Param('id') id: number, @Req() { userId }: AuthedReq) {
    const collection = await this.collectionService.getCollection(id, userId);
    return collection;
  }
}
