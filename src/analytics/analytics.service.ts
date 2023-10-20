import { Injectable, Logger } from '@nestjs/common';
import { FlowService } from 'src/flow/flow.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnalyticsService {
  private readonly logger = new Logger(AnalyticsService.name);
  constructor(
    private readonly prismaService: PrismaService,
    private readonly flowService: FlowService,
  ) {}
}
