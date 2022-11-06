import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwt: JwtService,
  ) {}

  @Post('register')
  register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: AuthDto, @Req() req, @Res() res) {
    return this.authService.login(dto, req, res);
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    return this.authService.logout(req, res);
  }

  @Get('user')
  async user(@Req() req, @Res() res) {
    return this.authService.getUser(req, res);
  }
}
