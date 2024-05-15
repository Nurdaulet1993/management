import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { UserApiService } from 'core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private userApiService = inject(UserApiService);

  ngOnInit(): void {
    this.userApiService.getUsers()
      .subscribe(users => {
        console.log(users)
      })
  }



}
