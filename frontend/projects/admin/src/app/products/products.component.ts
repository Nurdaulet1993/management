import { Component, inject } from '@angular/core';
import { Product, ProductService } from 'core';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productService = inject(ProductService);
  products = toSignal(this.productService.getProducts({}));

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
