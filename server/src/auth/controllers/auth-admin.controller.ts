import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../public.decorator';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../dto/register.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthGuard} from '../guards/jwt.guard';
import { GetUser } from '../get-user.decorator';
import { UserEntity } from '../../user/entities/user.entity';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(
    private authService: AuthService
  ) {}

  @Public()
  @Post('sign-up')
  signUp(@Body() body: RegisterDto) {
    return this.authService.signUp(body, true);
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
