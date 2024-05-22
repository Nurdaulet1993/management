import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../public.decorator';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../dto/register.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';

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

}
