import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { UserEntity } from '../user/entities/user.entity';
import { GetProductsDto } from './dto/get-products.dto';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepo: Repository<ProductEntity>
  ) {}
  create(createProductDto: CreateProductDto, user: UserEntity) {
    const product = this.productRepo.create({
      title: createProductDto.title,
      description: createProductDto.description,
      status: 'active',
      user
    })

    return this.productRepo.save(product)
  }

  findAll({ status, page, limit }: GetProductsDto) {
    const queryBuilder = this.productRepo.createQueryBuilder('p');
    if (status) queryBuilder.where('status = :status', { status });
    return paginate(queryBuilder, { page, limit });
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
