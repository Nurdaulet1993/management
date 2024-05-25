import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders } from './product.providers';
import { DatabaseModule } from '../database.module';

@Module({
  controllers: [
    ProductsController
  ],
  imports: [
    DatabaseModule
  ],
  providers: [
    ...productProviders,
    ProductsService
  ],
})
export class ProductsModule {}
