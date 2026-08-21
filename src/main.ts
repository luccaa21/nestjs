import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // mantendo o prefixo e as validações
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  // configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Documentação da API')
    .setDescription('Descrição da API do meu projeto NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // o primeiro parâmetro ('api/docs') é a rota onde a interface vai ficar disponível
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();