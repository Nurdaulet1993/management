import { InjectionToken } from '@angular/core';
import { Config } from './config.model';

export const CONFIG = new InjectionToken<Config>('core.config');
