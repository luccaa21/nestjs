import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // IMPLEMENTAÇÃO SWAGGER
  // 1. cria a configuração básica
  const config = new DocumentBuilder()
    .setTitle('API NestJS')
    .setDescription('Documentação da API criada em aula')
    .setVersion('1.0')
    .build();
  
  // 2. gera o documento
  const document = SwaggerModule.createDocument(app, config);
  
  // 3. monta o Swagger na rota '/swagger'
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000); // inicializa o app na porta 3000
  // o uso de "??" é o nullish coalescing operator - se não tiver valor no .env, insere 3000
}
bootstrap();
