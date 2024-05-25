import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import {UserEntity} from '../user/entities/user.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepo: Repository<ProductEntity>
  ) {}
  create(createProductDto: CreateProductDto, user: UserEntity) {
    console.log(user);
    console.log(createProductDto);
    const product = this.productRepo.create({
      title: createProductDto.title,
      description: createProductDto.description,
      status: 'active',
      user
    })

    return this.productRepo.save(product)
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
