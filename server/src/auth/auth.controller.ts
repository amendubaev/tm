//src/auth/auth.controller.ts

import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/register.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  @ApiOkResponse({ type: AuthEntity })
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }
}
