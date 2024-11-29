import { Routes } from '@angular/router';
import { homeComponent } from './views/home/home.component';

export const routes: Routes = [
  { path: '', component: homeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
