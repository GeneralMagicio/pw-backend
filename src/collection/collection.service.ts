import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ProjectType } from '@prisma/client';
import { FlowService } from 'src/flow/flow.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionService {
  private readonly logger = new Logger(CollectionService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly flowService: FlowService,
  ) {}

  getCollection = async (id: number, userId: number) => {
    const collection = await this.prismaService.project.findUnique({
      where: { id, type: { not: ProjectType.project } },
    });

    if (!collection) throw new BadRequestException('Invalid id');

    return {
      collection,
      progress: await this.flowService.getCollectionProgressStatus(userId, id),
      // started: await this.flowService.isCollectionStarted(userId, id),
    };
  };
}
