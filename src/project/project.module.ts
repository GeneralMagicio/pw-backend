import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { FlowModule } from 'src/flow/flow.module';

@Module({
  imports: [AuthModule, FlowModule],
  providers: [ProjectService, PrismaService, ProjectController],
  controllers: [ProjectController],
  exports: [ProjectService],
})
export class ProjectModule {}
