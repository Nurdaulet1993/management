import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { LayoutService } from '../layout.service';
import { AuthService, CurrentUser } from 'core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private router = inject(Router);
  private layoutService = inject(LayoutService);
  private authService = inject(AuthService);
  user: Signal<CurrentUser | null> = this.authService.currentUser;

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }
}
