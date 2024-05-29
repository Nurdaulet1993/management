import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { productProviders } from './product.providers';
import { DatabaseModule } from '../database.module';
import { ProductsAdminController } from './controllers/products-admin.controller';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  controllers: [
    ProductsController,
    ProductsAdminController
  ],
  imports: [
    DatabaseModule,
    CategoriesModule
  ],
  providers: [
    ...productProviders,
    ProductsService
  ],
})
export class ProductsModule {}
