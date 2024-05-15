import { ModuleWithProviders, NgModule } from '@angular/core';
import { Config } from './config/config.model';
import { CONFIG } from './config/config.token';

@NgModule()
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
        }
      ]
    }
  }
}
