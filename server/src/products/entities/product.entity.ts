import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import {CategoryEntity} from '../../categories/entities/category.entity';

@Entity({
  name: 'products'
})
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: 'active'
  })
  status: string;

  @Column()
  price: number;

  @ManyToOne(() => UserEntity, user => user.tasks)
  user: UserEntity;

  @ManyToOne(() => CategoryEntity, category => category.products)
  category: CategoryEntity;

  @CreateDateColumn()
  createdOn: Date;
}
