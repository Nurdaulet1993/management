import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { LayoutService } from '../layout.service';
import { AuthService, CurrentUser } from 'core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  user: Signal<CurrentUser | null> = this.authService.currentUser;

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
