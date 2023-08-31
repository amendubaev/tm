import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  // @ApiProperty()
  // id: number;

  // @ApiProperty()
  // createdAt: Date;

  // @ApiProperty()
  // updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  priority?: number;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  endDate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isRenewable?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  executorId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  estimatedHours?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  projectId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  boardColId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sort?: number;
}
