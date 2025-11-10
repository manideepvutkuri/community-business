// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { CategoryViewComponent } from './pages/category-view/category-view.component';
import { CategoryComponent } from './pages/category/category.component';
import { VendorsComponent } from './pages/vendors/vendors.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:category', component: CategoryComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent },
  { path: 'category/:name', component: CategoryViewComponent },
  { path: 'vendors', component: VendorsComponent },
];
