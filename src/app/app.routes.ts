import { Routes } from '@angular/router';
import { Login } from './modules/user/pages/login/login';
import { Home } from './modules/user/pages/home/home';
import { Register } from './modules/user/pages/register/register';
import { Cart } from './modules/user/pages/cart/cart';

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
