import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
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
