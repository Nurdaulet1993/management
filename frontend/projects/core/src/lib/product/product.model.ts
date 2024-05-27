export interface Product {
  id: number;
  title: string;
  description: string;
  status: string;
  createdOn: string;
}

export interface ProductsFilter {
  page?: number;
  limit?: number;
  status?: string;
}
