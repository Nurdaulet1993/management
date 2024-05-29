import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProductService } from 'core';
import { toSignal } from '@angular/core/rxjs-interop';
import {AsyncPipe, CurrencyPipe, DatePipe, TitleCasePipe} from '@angular/common';
import { PaginationComponent, PageService, PageTitleDirective } from 'ui';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { BreadcrumbComponent } from 'xng-breadcrumb';

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
    TitleCasePipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private pageService = inject(PageService);
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
