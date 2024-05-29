import {IsArray, IsNumber, IsOptional, IsString} from 'class-validator';
import {Transform} from 'class-transformer';

export class GetProductsDto {
  @IsString()
  @IsOptional()
  status :string;

  @Transform(({ value }): number => parseInt(value))
  @IsNumber()
  @IsOptional()
  page: number;

  @Transform(({ value }): number => parseInt(value))
  @IsNumber()
  @IsOptional()
  limit: number;

  @IsArray()
  @IsOptional()
  categoryIds: number[]


  // Add more query fields then
}
