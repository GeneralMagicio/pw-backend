import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { PrismaService } from 'src/prisma.service';
import { ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({ path: 'project' })
export class ProjectController {
  private readonly logger = new Logger(ProjectController.name);
  constructor(
    private readonly projectService: ProjectService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiQuery({
    name: 'cid',
    description: 'id of the project',
    required: false,
  })
  @Get(':id')
  async getProjects(@Param('id') id: number) {
    const project = await this.projectService.getProject(id);
    return project;
  }
}
