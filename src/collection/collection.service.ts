import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionService {
  private readonly logger = new Logger(CollectionService.name);
  constructor(private readonly prismaService: PrismaService) {}

  getCollection = async (id: number) => {
    const collection = await this.prismaService.collection.findUnique({
      where: { id },
    });

    if (!collection) throw new BadRequestException('Invalid id');

    return collection;
  };
}
