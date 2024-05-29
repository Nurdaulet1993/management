import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { PageTitleDirective } from 'ui';
import { QuillEditorComponent } from 'ngx-quill';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    PageTitleDirective,
    QuillEditorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    title: 'Iphone',
    description: ''
  })

  ngOnInit(): void {
    this.form.controls.description.valueChanges.subscribe(value => {
      console.log(value)
    })
  }
}
