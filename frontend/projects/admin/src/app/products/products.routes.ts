import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./product-edit/product-edit.component').then(c => c.ProductEditComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./product-edit/product-edit.component').then(c => c.ProductEditComponent)
  }
]
