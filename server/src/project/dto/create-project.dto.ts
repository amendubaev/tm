import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  slug: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // id: number;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsDate()
  // createdAt: Date;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsDate()
  // updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  priority?: number;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsDate()
  startDate?: Date;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsDate()
  endDate?: Date;

  @ApiProperty()
  @IsOptional()
  @ApiPropertyOptional()
  @IsBoolean()
  isRenewable?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  tasks?: number;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  boards?: number;
}
