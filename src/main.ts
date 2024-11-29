import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Certifique-se de que as rotas são exportadas corretamente

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Fornecendo as rotas
  ]
}).catch(err => console.error(err));
