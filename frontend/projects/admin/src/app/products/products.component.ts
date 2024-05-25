import { Component, inject } from '@angular/core';
import {Product, ProductService} from 'core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productService = inject(ProductService);

  product: Omit<Product, 'id'> = {
    title: 'Iphone',
    description: 'London is the capitol of GB'
  }

  addProduct() {
    this.productService.create(this.product)
      .subscribe(res => {
        console.log(res);
      })
  }
}
