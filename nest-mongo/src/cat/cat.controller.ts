import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { GetCatDto } from './cat.dto';

@Controller('cat')
export class CatController {
  @Get()
  getHello(@Query(ValidationPipe) query: GetCatDto): any {
    console.log(query);
    return {
      success: true,
      data: query,
    };
  }

  @Get(':id')
  getHello2(@Param() params: any): string {
    console.log(params.id);
    return `hello ${params.id}`;
  }
}
