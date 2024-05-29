import { Component } from '@angular/core';
import { PageTitleDirective } from 'ui';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PageTitleDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
