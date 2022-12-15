import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Bibliotecas para auxiliar na validação e transformação de dados
// npm i class-validator class-transformer

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // Se não estiver validado no DTO, será retirado do objeto
  }));
  await app.listen(3000);
}
bootstrap();
