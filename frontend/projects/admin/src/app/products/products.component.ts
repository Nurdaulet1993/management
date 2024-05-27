import { Component, inject } from '@angular/core';
import { ProductService } from 'core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productService = inject(ProductService);
  products = toSignal(this.productService.getProducts({ limit: 10, page: 1 }));
}
