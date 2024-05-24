import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<UserEntity>) {
    const payload = { ...user };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(createUserDto: RegisterDto, admin: boolean) {
    const user: UserEntity = await this.userService.findOneByEmail(createUserDto.email);
    if (user) throw new BadRequestException('Email in use!');
    return this.userService.create({
      ...createUserDto,
      type: admin ? 'seller' : 'customer'
    });
  }
}
