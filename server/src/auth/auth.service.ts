//src/auth/auth.service.ts
import { AuthEntity } from './entity/auth.entity';
import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/register.dto';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (user && isPasswordValid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: UserEntity): Promise<AuthEntity> {
    // const user = await this.prisma.user.findUnique({ where: { user.email } });

    // if (!user) {
    //   throw new NotFoundException(`No user found for email: ${email}`);
    // }

    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Invalid password');
    // }

    return {
      token: this.jwtService.sign({ sub: user.id }),
    };
  }

  async signup(dto: CreateUserDto): Promise<AuthEntity> {
    const isUserExists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (isUserExists) {
      throw new BadRequestException('User with this email already exists');
    }

    const user = await this.userService.create(dto);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${dto.email}`);
    }

    return {
      token: this.jwtService.sign({ sub: user.id }),
    };
  }
}
