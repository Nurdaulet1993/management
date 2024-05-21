import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../config/config.token';
import { Observable } from 'rxjs';
import {AuthResponse} from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private config = inject(CONFIG);
  private endpoint = this.config.isAdmin ? `${this.config.apiUrl}/admin/auth` : `${this.config.apiUrl}/auth`;

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, { email, password });
  }
}
