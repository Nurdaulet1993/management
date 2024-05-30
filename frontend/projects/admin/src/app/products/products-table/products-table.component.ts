import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from 'core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    CdkMenu,
    CdkMenuItem,
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
    CdkMenu, CdkMenuItem, CdkMenuTrigger
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  products = input<Product[]>([]);
  deleteProduct = output<number>();

  onDelete(id: number): void {
    this.deleteProduct.emit(id);
  }
}
