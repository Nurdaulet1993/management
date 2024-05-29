import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { GetProductsDto } from '../dto/get-products.dto';
import { paginate } from 'nestjs-typeorm-paginate';
import { CategoriesService } from '../../categories/categories.service';
import {CategoryEntity} from '../../categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepo: Repository<ProductEntity>,
    private categoriesService: CategoriesService
  ) {}
  async create(createProductDto: CreateProductDto, user: UserEntity) {
    const category = await this.categoriesService.findOne(createProductDto.categoryId);
    if (!category) throw new NotFoundException(`Category with ID ${createProductDto.categoryId} not found!`)
    const product = this.productRepo.create(createProductDto);
    product.user = user;
    product.category = category;
    return this.productRepo.save(product)
  }

  findAll({ status, page, limit, categoryIds }: GetProductsDto) {
    const queryBuilder = this.productRepo.createQueryBuilder('p')
      .leftJoinAndSelect('p.category', 'category');
    if (status) queryBuilder.where('status = :status', { status });
    if (categoryIds && categoryIds.length > 0) queryBuilder.where(
      'category.id IN (:...categoryIds)', { categoryIds }
    );
    return paginate(queryBuilder, { page, limit });
  }

  findOne(id: number): Promise<ProductEntity> {
    return this.productRepo.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
