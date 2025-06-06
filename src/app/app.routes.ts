import { Routes } from '@angular/router';
import { homeComponent } from './views/home/home.component';
import { PayFormComponent } from './views/pay-form/pay-form.component';

export const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'form-sponser', component: PayFormComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
