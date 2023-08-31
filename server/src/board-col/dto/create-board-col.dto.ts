import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBoardColDto {
  //   @ApiProperty()
  //   @IsNumber()
  //   @IsNotEmpty()
  //   id: number;

  //   @ApiProperty()
  //   createdAt: Date;

  //   @ApiProperty()
  //   updatedAt: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  projectId: number;

  //   @ApiProperty()
  //   @IsOptional()
  //   @IsNumber()
  //   sort?: number;
}
