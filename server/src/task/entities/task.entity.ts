import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  executorId: number;
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

  @ApiProperty()
  estimatedHours: number;

  @ApiProperty()
  projectId: number;

  @ApiProperty()
  boardColId: number;

  @ApiProperty()
  sort: number;
}
