import { NgModule } from '@angular/core';
import { routes } from './app.routes'; // Importe as rotas aqui
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
