import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './cart/components/carts/carts.component';
import { CheckoutComponent } from './cart/components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { ProductDetailsComponent } from './product/components/product-details/product-details.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';

const routes: Routes = [
  {path:'Products',component:AllProductsComponent},
  {path:'Details/:id',component:ProductDetailsComponent},
  {path:'CheckOut',component:CheckoutComponent},
  {path:'Home',component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'About',component:AboutComponent},
  {path:'cart',component:CartsComponent},
  {path:'**',redirectTo:"Home",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
