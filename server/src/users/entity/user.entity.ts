import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @Exclude()
  password: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  departmentId: number;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  birthday: Date;
  @ApiProperty()
  male: string;
  @ApiProperty()
  isGuest: boolean;
}
