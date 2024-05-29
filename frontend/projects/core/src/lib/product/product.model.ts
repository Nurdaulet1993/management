import { Category } from '../category';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  status: string;
  category: Category;
  createdOn: string;
}

export interface ProductsFilter {
  page?: number;
  limit?: number;
  status?: string;
}
