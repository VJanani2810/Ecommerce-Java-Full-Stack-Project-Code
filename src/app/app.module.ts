import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTagToProductComponent } from './admin/add-tag-to-product/add-tag-to-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { MaterialModule } from './material-module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DesktopGridComponent } from './desktop-grid/desktop-grid.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { RouterModule } from '@angular/router';
import { FAQComponent } from './faq/faq.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SecurityComponent } from './security/security.component';
import { MatSortModule } from '@angular/material/sort';
import { PaymentComponent } from './payment/payment.component';
import { DealsComponent } from './deals/deals.component' 
import { NewUserComponent } from './new-user/new-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddTagToProductComponent,
    AddTagComponent,
    CategoriesComponent,
    DashboardComponent,
    DisplayCategoryComponent,
    DisplayTagComponent,
    EcommerceComponent,
    ProfileComponent,
    UpdateProfileComponent,
    OrdersComponent,
    ProductsComponent,
    SangleProductComponent,
    ShoppingCartComponent,
    CarouselSlideComponent,
    AboutUsComponent,
    ContactUsComponent,
    DesktopGridComponent,
    FooterComponent,
    FAQComponent,
    ReturnPolicyComponent,
    TermsOfUseComponent,
    SecurityComponent,
    PaymentComponent,
    DealsComponent,
    NewUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    MatSortModule,
    RouterModule.forChild([
      {path : 'aboutUs',component:AboutUsComponent},
      {path:'' ,redirectTo :'/aboutUs',pathMatch:'full'},
      {path:'contactUs',component:ContactUsComponent},
      {path:'',redirectTo:'/contactUs',pathMatch:'full'},
      {path:'FAQ',component:FAQComponent},
      {path:'',redirectTo:'/FAQ',pathMatch:'full'},
      {path:'returnPolicy',component:ReturnPolicyComponent},
      {path:'',redirectTo:'/returnPolicy',pathMatch:'full'},
      {path:'termsOfUse',component:TermsOfUseComponent},
      {path:'',redirectTo:'/termsOfUse',pathMatch:'full'},
      {path:'security',component:SecurityComponent},
      {path:'',redirectTo:'/security',pathMatch:'full'},
      {path:'payment',component:PaymentComponent},
      {path:'',redirectTo:'/payment',pathMatch:'full'},
      {path:'order',component:OrdersComponent},
      {path:'',redirectTo:'/order',pathMatch:'full'},
      {path:'deals',component:DealsComponent},
      {path:'',redirectTo:'/deals',pathMatch:'full'},
      {path:'newUser',component:NewUserComponent},
      {path:'',redirectTo:'/newUser',pathMatch:'full'},
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
