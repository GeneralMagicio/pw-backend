import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { MocksModule } from './mock/mock.module';
import { FlowModule } from './flow/flow.module';
import { CollectionModule } from './collection/colleciton.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    MocksModule,
    FlowModule,
    CollectionModule,
    ProjectModule,
    // AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
