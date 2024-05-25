import {BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {ProductEntity} from '../../products/entities/product.entity';

@Entity({
  name: 'users'
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  firstName: string;

  @Column({ length: 20 })
  lastName: string;

  @Column({ length: 30, unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @OneToMany(() => ProductEntity, product => product.user)
  tasks: ProductEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
