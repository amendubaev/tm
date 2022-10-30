/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  priority: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  isRenewable: boolean;

  @ApiProperty()
  authorId: number;
  
}
