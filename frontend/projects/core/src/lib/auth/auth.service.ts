import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { catchError, EMPTY, Observable, shareReplay, tap } from 'rxjs';
import { AuthResponse, CurrentUser } from './auth.model';
import { JwtService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private jwtService = inject(JwtService);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/auth` : `${this.config.apiUrl}/auth`;
  currentUser = signal<CurrentUser | null>(null);

  signIn(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, { email, password })
      .pipe(
        tap(res => {
          this.jwtService.setToken(res.access_token);
          this.currentUser.set(res.user)
        })
      )
  }

  signUp(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post(`${this.endpoint}/sign-up`, { email, password, firstName, lastName });
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`${this.endpoint}/user`)
      .pipe(
        tap(user => this.currentUser.set(user)),
        catchError(() => {
          this.logout();
          return EMPTY;
        }),
        shareReplay(1)
      )
  }

  logout() {
    this.jwtService.removeToken();
    this.currentUser.set(null);
  }
}
