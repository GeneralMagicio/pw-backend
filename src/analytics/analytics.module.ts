import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { PrismaService } from 'src/prisma.service';
import { FlowModule } from 'src/flow/flow.module';

@Module({
  imports: [FlowModule],
  providers: [AnalyticsService, PrismaService, AnalyticsController],
  controllers: [AnalyticsController],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
