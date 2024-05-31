import { ChangeDetectionStrategy, Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ProductService, Paginated, Product, CategoryService } from 'core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { PaginationComponent, PageTitleDirective } from 'ui';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap, withLatestFrom, merge, tap, filter, debounceTime } from 'rxjs';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { ToastrService } from 'ngx-toastr';
import { ProductsTableComponent } from './products-table/products-table.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ProductsTableComponent,
    FormsModule,
    TitleCasePipe,
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private toastrService = inject(ToastrService);
  productDeletedId = signal<number | null>(null);
  categories = inject(CategoryService).categories;
  search = new FormControl<string>(this.route.snapshot.queryParams['search'], { nonNullable: true });

  products$ = this.route.queryParams
    .pipe(
      switchMap(filters => this.productService.getProducts(filters))
    )

  products: Signal<Paginated<Product> | undefined> = toSignal(
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

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(search => {
        this.router.navigate([], { queryParams: { search: search ? search : null }, queryParamsHandling: 'merge' })
      })
  }

  onPaginate(page: number) {
    this.router.navigate([], { queryParams: { page }, queryParamsHandling: 'merge' })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(product => {
        this.productDeletedId.set(id);
        this.toastrService.success(
          `Product with ID ${id} deleted successfully!`,
          'Delete Success',
          { timeOut: 1000 }
        )
      })
  }
}
