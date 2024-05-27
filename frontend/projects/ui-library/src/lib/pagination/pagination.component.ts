import {ChangeDetectionStrategy, Component, computed, Input, input, numberAttribute, signal} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ui-pagination',
  standalone: true,
  imports: [NgxPaginationModule, JsonPipe],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input({ transform: numberAttribute, alias: 'currentPage' }) set page(value: number) {
    this.currentPage.set(value);
  }
  currentPage = signal<number>(1)
  itemsPerPage = input<number>(10);
  totalItems = input<number>(0);
  itemCount = input<number>();

  pagesCount = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage()));
  pages = computed(() => this.range(1, this.pagesCount()));

  setPage(page: number): void {
    this.currentPage.set(page);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  onNextPage(): void {
    this.currentPage.update(value => value + 1);
  };

  onPrevPage(): void {
    this.currentPage.update(value => value - 1);
  };
}
