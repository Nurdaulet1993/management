import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import {GetUser} from './get-user.decorator';
import {UserEntity} from '../user/entities/user.entity';
import {Public} from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('sign-up')
  signUp(@Body() body: CreateUserDto) {
    return this.authService.signUp(body);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    console.log(req.user)
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getProfile(@GetUser() user: Omit<UserEntity, "password">) {
    return user;
  }
}
