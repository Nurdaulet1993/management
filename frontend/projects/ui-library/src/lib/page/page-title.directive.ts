import { AfterViewInit, Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import { PageService } from './page.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[ui-page-title]',
  standalone: true
})
export class PageTitleDirective implements AfterViewInit {
  private pageService = inject(PageService);
  public template = inject(TemplateRef<any>);
  private vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.pageService.setTitle(new TemplatePortal<any>(this.template, this.vcr))
  }

}
