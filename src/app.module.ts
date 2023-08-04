import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { MocksModule } from './mock/mock.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, MocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
