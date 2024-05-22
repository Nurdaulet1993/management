import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly tokenName = 'accessToken';
  getToken(): string | null {
    return localStorage.getItem(this.tokenName);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenName);
  }
}
