import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/products` : `${this.config.apiUrl}/products`;

  create(product: Omit<Product, 'id'>) {
    return this.http.post(this.endpoint, product);
  }
}
