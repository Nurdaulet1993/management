import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {UserEntity} from '../user/entities/user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): Omit<UserEntity, "password"> => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
