import {IsEmail, IsIn, IsNotEmpty, IsString} from 'class-validator';
import {UserType} from '../user.model';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['client', 'customer'])
  type: UserType;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
