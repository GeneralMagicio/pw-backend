import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  let httpsOptions = undefined;
  if (process.env.NODE_ENV === 'development') {
    httpsOptions = {
      key: fs.readFileSync('./certs/cert.key'),
      cert: fs.readFileSync('./certs/cert.crt'),
    };
  }
  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(cors({ credentials: true, origin: 'https://localhost:3001' }));
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Pairwise')
    .setDescription('Pairwise API Application')
    .setVersion('v0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(7070, '0.0.0.0');
}
bootstrap();
