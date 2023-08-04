import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  let httpsOptions = undefined;
  if (process.env.NODE_ENV === 'development') {
    httpsOptions = {
      key: fs.readFileSync('./certs/cert.key'),
      cert: fs.readFileSync('./certs/cert.crt'),
    };
  }

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.use(cors({ credentials: true, origin: 'https://localhost:3001' }));
  app.use(cookieParser());
  await app.listen(7070, '0.0.0.0');
}
bootstrap();
