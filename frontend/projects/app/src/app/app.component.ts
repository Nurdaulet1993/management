import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({ selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss', imports: [RouterOutlet, AsyncPipe], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppComponent {}
