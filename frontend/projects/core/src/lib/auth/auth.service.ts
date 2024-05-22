import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from './auth.model';
import { User } from './user.model';
import { JwtService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private jwtService = inject(JwtService);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/auth` : `${this.config.apiUrl}/auth`;
  currentUser = signal<User | null>(null);

  signIn(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, { email, password })
      .pipe(
        tap(res => this.jwtService.setToken(res.access_token))
      )
  }

  signUp(email: string, password: string, name: string) {
    return this.http.post(`${this.endpoint}/sign-up`, { email, password, name });
  }
}
