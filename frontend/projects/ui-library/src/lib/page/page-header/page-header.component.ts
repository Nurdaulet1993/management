import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreadcrumbComponent } from 'xng-breadcrumb';
import { PageService } from '../page.service';
import { PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ui-page-header',
  standalone: true,
  imports: [BreadcrumbComponent, PortalModule, AsyncPipe],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  private pageService = inject(PageService);
  titlePortal = this.pageService.title;
}
