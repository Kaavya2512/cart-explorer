import { Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

export const routes: Routes = [
  { path: '', component: CartListComponent },
  { path: 'cart/:id', component: CartDetailsComponent },
  { path: '**', redirectTo: '' }
];
