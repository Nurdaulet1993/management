import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/categories` : `${this.config.apiUrl}/categories`;

  private categories$: Observable<Category[]> = this.http.get<Category[]>(this.endpoint);

  categories = toSignal(this.categories$, { initialValue: [] });

  create(title: string): Observable<Category> {
    return this.http.post<Category>(this.endpoint, { title });
  }
}
