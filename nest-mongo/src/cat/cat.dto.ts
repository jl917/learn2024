import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  getHello(@Req() request: Request): string {
    const forwarded = request.headers['x-forwarded-for'] as string;
    console.log(forwarded.split(',')[0].trim());
    return 'hellocat2';
  }

  @Get(':id')
  getHello2(@Param() params: any): string {
    console.log(params.id);
    return `hello ${params.id}`;
  }
}
