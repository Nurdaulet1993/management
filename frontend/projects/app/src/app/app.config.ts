import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { CoreModule, authInterceptor } from 'core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom([
      CoreModule.forRoot({
        apiUrl: environment.apiUrl,
        isAdmin: false
      })
    ])
  ],
};
