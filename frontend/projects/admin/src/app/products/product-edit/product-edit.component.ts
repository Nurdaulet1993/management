import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { PageTitleDirective } from 'ui';
import { QuillEditorComponent } from 'ngx-quill';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService, ProductService } from 'core';
import { TitleCasePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    PageTitleDirective,
    QuillEditorComponent,
    ReactiveFormsModule,
    TitleCasePipe,
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductEditComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);
  private toastrService = inject(ToastrService);
  private fb = inject(FormBuilder);
  categories = this.categoryService.categories;

  form = this.fb.nonNullable.group({
    title: 'Смартфон OPPO Reno11F 5G',
    description: 'Операционная система Android 14',
    price: this.fb.nonNullable.control(''),
    categoryId: this.fb.nonNullable.control('', [Validators.required])
  })

  saveProduct() {
    if (this.form.invalid) return;
    const { title, description, price, categoryId } = this.form.getRawValue();

    this.productService.create({ title, description, price: +price, categoryId: +categoryId })
      .subscribe(product => {
        this.toastrService.success(`${product.title} added successfully!`, '', { timeOut: 1000 });
        this.router.navigate(['../'], { queryParamsHandling: 'merge', relativeTo: this.route });
      })
  }
}
