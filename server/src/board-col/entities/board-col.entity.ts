import { ApiProperty } from '@nestjs/swagger';
import { BoardCol } from '@prisma/client';

export class BoardColEntity implements BoardCol {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  sort: number;

  @ApiProperty()
  projectId: number;
}
