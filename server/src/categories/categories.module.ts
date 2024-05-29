import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { DatabaseModule } from '../database.module';
import { categoryProviders } from './category.providers';

@Module({
  controllers: [CategoriesController],
  imports: [
    DatabaseModule
  ],
  providers: [
    ...categoryProviders,
    CategoriesService
  ],
  exports: [
    CategoriesService
  ]
})
export class CategoriesModule {}
