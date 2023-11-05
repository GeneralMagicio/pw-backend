import { Module, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/user/users.service';
import { UsersModule } from 'src/user/users.module';
import { PrismaService } from 'src/prisma.service';
import { FlowModule } from 'src/flow/flow.module';

@Module({
  imports: [UsersModule, forwardRef(() => FlowModule)],
  providers: [
    AuthService,
    PrismaService,
    AuthController,
    ConfigService,
    UsersService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
