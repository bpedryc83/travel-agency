import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaService } from './shared/services/prisma.service';
import { join } from 'path';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors({
      origin: ['http://localhost:3000'],
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
      credentials: true,
    });
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(path.join(__dirname, '/client/build')));
  app.use(express.static(join(__dirname, '../../', '/public')));
  const server = await app.listen(8000);

  // app.get('*', (_req, res): string => {
  //   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  // });

  server.prependListener('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  });
}
bootstrap();
