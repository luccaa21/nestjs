import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

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
  
  // 3. monta o Swagger na rota '/api'
  SwaggerModule.setup('api', app, document);

}
bootstrap();
