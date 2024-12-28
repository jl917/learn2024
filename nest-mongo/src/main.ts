import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './CustomExceptionFilter';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의된 속성만 허용
      forbidNonWhitelisted: true, // 정의되지 않은 속성 요청 시 에러 반환
      transform: true, // 요청 데이터를 DTO로 자동 변환
    }),
  );

  await app.listen(port);
  console.log(port);
}
bootstrap();
