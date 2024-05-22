import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { GetUser } from '../get-user.decorator';
import { UserEntity } from '../../user/entities/user.entity';
import { Public } from '../public.decorator';
import { RegisterDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('sign-up')
  signUp(@Body() body: RegisterDto) {
    return this.authService.signUp(body, false);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getProfile(@GetUser() user: Omit<UserEntity, "password">) {
    return user;
  }
}
