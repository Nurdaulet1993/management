import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

import { CoreModule } from 'core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      CoreModule.forRoot({
        apiUrl: environment.apiUrl,
        isAdmin: false
      })
    ])
  ],
};
