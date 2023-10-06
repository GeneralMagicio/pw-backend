import { Controller, Get, Logger } from '@nestjs/common';
import { ProjectType } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Controller({ path: 'mock' })
export class MockController {
  private readonly logger = new Logger(MockController.name);
  constructor(private readonly prismaService: PrismaService) {}

  @Get('/collections')
  async getCollections() {
    const collections = await this.prismaService.project.findMany({
      where: { type: ProjectType.collection },
    });

    return collections;
  }

  @Get('/projects')
  async getProjects() {
    const projects = await this.prismaService.project.findMany();

    return projects;
  }
}
