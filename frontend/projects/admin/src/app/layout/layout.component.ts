import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {LayoutService} from './layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  host: {
    '[class.open]': 'sidebarOpen()'
  }
})
export class LayoutComponent {
  private layoutService = inject(LayoutService);
  sidebarOpen = this.layoutService.sidebarOpen;
}
