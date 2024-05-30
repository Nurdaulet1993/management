import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { GetUser } from '../../auth/get-user.decorator';
import { UserEntity } from '../../user/entities/user.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { Public } from '../../auth/public.decorator';
import { GetProductsDto } from '../dto/get-products.dto';

@Controller('admin/products')
export class ProductsAdminController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @GetUser() user: UserEntity,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.create(createProductDto, user);
  }

  @Public()
  @Get()
  findAll(@Query() query: GetProductsDto) {
    return this.productsService.findAll(query);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
