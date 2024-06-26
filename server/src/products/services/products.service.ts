import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Brackets, Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { GetProductsDto } from '../dto/get-products.dto';
import { paginate } from 'nestjs-typeorm-paginate';
import { CategoriesService } from '../../categories/categories.service';
import { from, map, switchMap } from 'rxjs';

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

  findAll({ search, status, page, limit, categoryIds }: GetProductsDto) {
    const queryBuilder = this.productRepo.createQueryBuilder('p')
      .leftJoinAndSelect('p.category', 'category');

    if (search) {
      queryBuilder
        .andWhere(
          new Brackets((qb) => {
            qb
              .where("LOWER(p.title) LIKE :search", { search: `%${search.toLowerCase()}%` })
              .orWhere("LOWER(p.description) LIKE :search", { search: `%${search.toLowerCase()}%` })
          })
        )
    }

    if (status) queryBuilder.andWhere('status = :status', { status });
    if (categoryIds && categoryIds.length > 0) queryBuilder.andWhere(
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
    return from(this.findOne(id))
      .pipe(
        map(task => {
          if (!task) throw new NotFoundException(`Product wit ID ${id} not found`);
          return task;
        }),
        switchMap(product => this.productRepo.remove(product))
      )
  }
}
