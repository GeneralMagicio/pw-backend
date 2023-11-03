import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ProjectType } from '@prisma/client';
import { FlowService } from 'src/flow/flow.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name);
  constructor(private readonly prismaService: PrismaService) {}

  getProject = async (id: number) => {
    const project = await this.prismaService.project.findUnique({
      where: { id, type: ProjectType.project },
    });

    if (!project) throw new BadRequestException('Invalid id');

    return {
      project,
      // progress: await this.flowService.getProjectProgressStatus(userId, id),
      // started: await this.flowService.isProjectStarted(userId, id),
    };
  };
}
