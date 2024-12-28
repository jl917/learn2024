import { IsString, IsInt, Min, Max, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCatDto {
  @IsString({ message: 'The name must be a string.' })
  name: string;

  @IsInt({ message: 'The age must be an integer.' })
  @Min(18, { message: 'The age must be at least 18.' })
  @Max(99, { message: 'The age must be 99 or less.' })
  @Type(() => Number) // 숫자로 변환
  age: number;

  @IsOptional()
  @IsArray()
  emails?: string[]; // 선택적 필드
}
