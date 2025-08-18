import { Routes } from '@angular/router';
import { Login } from './user/pages/login/login';
import { Home } from './user/pages/home/home';
import { Register } from './user/pages/register/register';
import { Cart } from './user/pages/cart/cart';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'cart',
    component: Cart,
  },
];
