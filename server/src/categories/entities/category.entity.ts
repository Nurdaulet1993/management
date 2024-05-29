import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity({
  name: 'categories'
})
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  @OneToMany(() => ProductEntity, product => product.category)
  products: ProductEntity[]
}
