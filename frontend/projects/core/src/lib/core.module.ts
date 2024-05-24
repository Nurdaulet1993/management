import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Config } from './config/config.model';
import { CONFIG } from './config/config.token';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { JwtService } from './services';
import { EMPTY } from 'rxjs';

@NgModule({
  exports: [],
  imports: [],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class CoreModule {
  static forRoot(config: Config = { apiUrl: 'http://localhost:3000/api', isAdmin: false }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: CONFIG,
          useValue: {
            apiUrl: config.apiUrl,
            isAdmin: config.isAdmin
          }
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (authService: AuthService, jwtService: JwtService) => {
            return () => (jwtService.getToken() ? authService.getCurrentUser() : EMPTY)
          },
          multi: true,
          deps: [AuthService, JwtService]
        }
      ]
    }
  }
}
