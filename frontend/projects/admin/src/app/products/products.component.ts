import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductService } from 'core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, CurrencyPipe, DatePipe, TitleCasePipe} from '@angular/common';
import { PaginationComponent, PageTitleDirective } from 'ui';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap, withLatestFrom, merge, tap, filter } from 'rxjs';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DatePipe,
    PaginationComponent,
    AsyncPipe,
    RouterLink,
    BreadcrumbComponent,
    PageTitleDirective,
    CurrencyPipe,
    TitleCasePipe,
    CdkMenu, CdkMenuItem, CdkMenuTrigger
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
  productDeletedId = signal<number | null>(null);

  products$ = this.route.queryParams
    .pipe(
      switchMap(filters => this.productService.getProducts({...filters }))
    )

  products = toSignal(
    merge(
      this.products$,
      toObservable(this.productDeletedId)
        .pipe(
          filter(Boolean),
          withLatestFrom(this.route.queryParams),
          switchMap(([, filters]) => this.productService.getProducts(filters)),
          tap(({ meta}) => {
            this.router.navigate(
              [],
              {
                queryParams: { page: meta.totalPages >= meta.currentPage ? meta.currentPage : meta.totalPages },
                queryParamsHandling: 'merge'
              }
            );
          })
        )
    )
  );

  onPaginate(page: number) {
    this.router.navigate([], { queryParams: { page }, queryParamsHandling: 'merge' })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(product => this.productDeletedId.set(id))
  }
}
