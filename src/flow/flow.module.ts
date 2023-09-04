import { Module } from '@nestjs/common';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { CollectionModule } from 'src/collection/colleciton.module';

@Module({
  imports: [AuthModule, CollectionModule],
  providers: [FlowService, PrismaService, FlowController],
  controllers: [FlowController],
  exports: [FlowService],
})
export class FlowModule {}
