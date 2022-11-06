/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
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
    @ApiProperty()
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
