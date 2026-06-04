// app.config.ts
// Configuración global de la aplicación
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// provideHttpClient habilita HttpClient en toda la app
// app.config.ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiKeyInterceptor } from './app/interceptors/api-key-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // withInterceptors registra los interceptores
    provideHttpClient(withInterceptors([apiKeyInterceptor]))
  ]
};