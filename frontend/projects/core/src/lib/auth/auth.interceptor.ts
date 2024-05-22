import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtService } from '../services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JwtService);
  const token: string | null = jwtService.getToken();
  if (!token) return next(req);
  const request = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });
  return next(request);
};
