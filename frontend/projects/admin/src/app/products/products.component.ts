import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {ProductService} from 'core';
import {toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe, DatePipe} from '@angular/common';
import {PaginationComponent} from 'ui';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DatePipe,
    PaginationComponent,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  currentPage = signal(1);
  itemsPerPage = signal(4);

  products$ = this.route.queryParams
    .pipe(
      switchMap(filters => this.productService.getProducts({...filters }))
    )

  products = toSignal(this.products$);

  onPaginate(page: number) {
    this.router.navigate([], { queryParams: { page }, queryParamsHandling: 'merge' })
  }
}
