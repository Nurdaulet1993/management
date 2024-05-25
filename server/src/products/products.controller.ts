import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../auth/get-user.decorator';
import { UserEntity } from '../user/entities/user.entity';

@Controller('admin/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @GetUser() user: UserEntity,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(createProductDto, user);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
