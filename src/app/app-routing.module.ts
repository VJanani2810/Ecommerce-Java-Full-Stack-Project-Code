import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'sangle/product/:idProduct',
    component: SangleProductComponent
  },
  {
    path: 'puy/product/:name',
    component: SangleProductComponent
  },
  {
    path: 'dsiplay-category/:idCategory',
    component: DisplayCategoryComponent
  },
  {
    path: 'display-tag/:idTag',
    component: DisplayTagComponent
  },
  // jc add this
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent

  },
  {
    path: 'updateProfile',
    component: UpdateProfileComponent

  },
  {
    path: 'addTag',
    component: AddTagComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent

  },
   {
    path: 'addCategory/:idUser',
    component: AddCategoryComponent

  },
  {
    path: 'payment',
    component: PaymentComponent

  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      {
        path: 'categories/:idCategory',
        component: CategoriesComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
