import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { from, map, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepo: Repository<UserEntity>
  ) {}

  create({ firstName, lastName, email, password, type }: CreateUserDto): Observable<Partial<UserEntity>> {
    const user = this.userRepo.create({ firstName, lastName, email, password, type });
    return from(this.userRepo.save(user))
      .pipe(
        map(({ password, ...props}) => props)
      )
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: { id }
    });
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    console.log('test')
    return this.userRepo.findOne({
      where: { email }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
