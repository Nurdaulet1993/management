export interface Product {
  id: number;
  title: string;
  description: string;
}

export interface ProductsFilter {
  page?: number;
  limit?: number;
  status?: string;
}
