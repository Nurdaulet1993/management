import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    loadComponent: () => import('./product-edit/product-edit.component').then(c => c.ProductEditComponent)
  }
]
