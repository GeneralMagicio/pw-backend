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
  // app.enableCors();
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(
    cors({
      credentials: true,
      origin: [
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
      ],
    }),
  );

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
