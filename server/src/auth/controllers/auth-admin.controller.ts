import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../public.decorator';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../dto/register.dto';

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
}
