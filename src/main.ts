import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:8000',
      'http://192.168.100.54:3000',
      'http://192.168.100.54:8000',
      'http://192.168.100.10:3000',
      'http://192.168.100.10:8000'
    ],
    credentials: true
  });
  app.use(cookieParser());
  app.use(
    session({
      secret: '123zcbmnvx123',
      resave: false,
      saveUninitialized: false
    })
  );

  await app.listen(3000);
}
bootstrap();