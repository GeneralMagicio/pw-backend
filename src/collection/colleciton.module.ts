import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [CollectionService, PrismaService, CollectionController],
  controllers: [CollectionController],
  exports: [CollectionService],
})
export class CollectionModule {}
