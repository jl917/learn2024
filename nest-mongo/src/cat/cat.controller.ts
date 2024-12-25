import { Request } from 'express';
import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  getHello(@Req() request: Request): string {
    console.log(request.query);
    return 'hellocat2';
  }

  @Get(':id')
  getHello2(@Param() params: any): string {
    console.log(params.id);
    return `hello ${params.id}`;
  }
}
