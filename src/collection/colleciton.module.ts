import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { FlowModule } from 'src/flow/flow.module';

@Module({
  imports: [AuthModule, FlowModule],
  providers: [CollectionService, PrismaService, CollectionController],
  controllers: [CollectionController],
  exports: [CollectionService],
})
export class CollectionModule {}
