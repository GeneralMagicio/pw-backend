import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { PrismaService } from 'src/prisma.service';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller({ path: 'project' })
export class ProjectController {
  private readonly logger = new Logger(ProjectController.name);
  constructor(
    private readonly projectService: ProjectService,
    private readonly prismaService: PrismaService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Individual project details',
  })
  @Get(':id')
  async getProjects(@Param('id') id: number) {
    const project = await this.projectService.getProject(id);
    return project;
  }
}
