import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // é um controller padrão - segue o protocolo HTTP

  // aqui inserimos a rota desse endpoint em específico
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // novo endpoint get
  @Get('/test-status-code')
  getStatusCode(@Response() res) {
    res.status(401).json({
      message: "Não autorizado!"
    })
    return;
  }
}
