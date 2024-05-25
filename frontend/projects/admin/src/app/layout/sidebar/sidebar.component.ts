import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private layoutService = inject(LayoutService);
  isOpen = this.layoutService.sidebarOpen;
}
