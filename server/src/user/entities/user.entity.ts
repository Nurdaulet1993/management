import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({
  name: 'users'
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, unique: true })
  name: string;

  @Column({ length: 30, unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
