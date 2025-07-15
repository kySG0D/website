import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PayFormComponent } from './views/pay-form/pay-form.component';
import { DonateComponent } from './views/donate/donate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja', component: PayFormComponent},
  { path: 'doar', component: DonateComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
