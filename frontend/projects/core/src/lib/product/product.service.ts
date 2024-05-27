import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { Product, ProductsFilter } from './product.model';
import { Paginated } from '../models/pagination.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/products` : `${this.config.apiUrl}/products`;

  create(product: Partial<Product>) {
    return this.http.post(this.endpoint, product);
  }

  getProducts(filters: ProductsFilter): Observable<Paginated<Product>> {
    return this.http.get<Paginated<Product>>(this.endpoint, {
      params: { ...filters }
    });
  }
}
