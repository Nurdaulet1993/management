import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { PageTitleDirective } from 'ui';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    PageTitleDirective
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {

}
