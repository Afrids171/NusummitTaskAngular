import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Product } from './product/product';
import { ProductForm } from './product-form/product-form';
import { ProductCount } from './product-count/product-count';
import { authGuardGuard } from './auth-guard-guard';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'login',component:Login},
    // {path:'product-form',component:ProductForm},
    // {path:'product-count',component:ProductCount},
    { path: 'product', component: Product, canActivate: [authGuardGuard] },
];
