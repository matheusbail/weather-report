import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), {provide: LOCALE_ID, useValue: 'pt'  } ]
};
