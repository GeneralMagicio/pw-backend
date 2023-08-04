import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MockController } from './mock.controller';

@Module({
  imports: [],
  providers: [PrismaService],
  exports: [],
  controllers: [MockController],
})
export class MocksModule {}
