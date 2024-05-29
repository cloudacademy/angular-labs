import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { LoggerService } from './services/logger/logger.service';
import { TimedLoggerService } from './services/logger/timed-logger.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),{provide: LoggerService, useClass: TimedLoggerService}]
};
