import { Module, forwardRef } from '@nestjs/common';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [FlowService, PrismaService, FlowController],
  controllers: [FlowController],
  exports: [FlowService],
})
export class FlowModule {}
