import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

const CorsWhitelist = [
  'https://localhost:3001',
  'https://staging.pairwise.generalmagic.io',
  'https://staging.pairwise.vote/',
  'https://staging.pairwise.vote',
  'https://www.pairwise.vote',
  'https://pairwise.vote',
  'https://pairwise.vote/',
  'https://www.pairwise.vote/',
  'http://www.pairwise.vote',
  'http://pairwise.vote',
  'http://pairwise.vote/',
  'http://www.pairwise.vote/',
  'https://pairwise-frontend-git-test-numerous-planets-general-magic.vercel.app',
  'https://pwrd.cupofjoy.store',
];

async function bootstrap() {
  let httpsOptions = undefined;
  if (process.env.NODE_ENV === 'development') {
    httpsOptions = {
      key: fs.readFileSync('./certs/cert.key'),
      cert: fs.readFileSync('./certs/cert.crt'),
    };
  }
  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.use(json({ limit: '5mb' }));
  app.use(urlencoded({ extended: true, limit: '5mb' }));
  // app.enableCors();
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.use(cors());

  // app.use((req: any, res: any) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Content-Type,Content-Length, Authorization, Accept,X-Requested-With, Auth',
  //   );
  //   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  //   //...
  // });

  // const corsOptions = {
  //   origin(origin: any, callback: any) {
  //     return callback(null, true);
  //   },
  // };

  app.use(
    cors({
      credentials: true,
      allowedHeaders: ['content-type', 'auth'],
      // allowedHeaders: ['Auth'],
      origin: (origin, callback) => {
        if (
          !origin ||
          CorsWhitelist.includes(origin) ||
          (origin.includes('vercel.app') && origin.includes('pairwise'))
        )
          return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
      },
    }),
  );

  // app.use(function (req: any, res: any, next: any) {
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'X-Requested-With,content-type,auth',
  //   );
  //   next();
  // });

  // app.use(function (req: any, res: any, next: any) {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader(
  //     'Access-Control-Allow-Methods',
  //     'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //   );
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'X-Requested-With,content-type',
  //   );
  //   res.setHeader('Access-Control-Allow-Credentials', true);
  //   next();
  // });

  // app.all('*', function (req, res) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
  //   );
  //   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  //   //...
  // });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Pairwise')
    .setDescription('Pairwise API Application')
    .setVersion('v0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 7070, '0.0.0.0');
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
