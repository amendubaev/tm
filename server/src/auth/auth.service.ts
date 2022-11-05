import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const { email, password } = dto;

    const isUserExist = await this.prisma.user.findUnique({ where: { email } });

    if (isUserExist) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return { message: 'signup was successful' };
  }

  async signin(dto: AuthDto, req: Request, res: Response) {
    const { email, password } = dto;

    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (!foundUser) {
      throw new BadRequestException('Wrong credentials');
    }

    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.password,
    });

    if (!isMatch) {
      throw new BadRequestException('Wrong credentials');
    }

    const token = await this.signToken({
      id: foundUser.id,
      email: foundUser.email,
    });

    if (!token) {
      throw new ForbiddenException();
    }

    res.cookie('token', token);

    return res.send({ message: 'Logged in successfuly' });
  }
  async signout(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Logged out successfully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { id: number; email: string }) {
    const payload = args;

    return this.jwt.signAsync(payload, { secret: process.env.JWT_SECRET });
  }
}