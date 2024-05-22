import {Component, inject, WritableSignal} from '@angular/core';
import {AuthService, CurrentUser} from 'core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private authService = inject(AuthService);
  user: WritableSignal<CurrentUser | null>  = this.authService.currentUser;
}
