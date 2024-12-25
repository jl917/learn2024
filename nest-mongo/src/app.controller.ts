import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Person {
  name: string;
  age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Person {
    return this.appService.getHello();
  }
}
