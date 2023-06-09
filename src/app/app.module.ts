import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './components/about/about.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';
import { CartModule } from './cart/cart.module';
import { CorsModule } from './cors/cors/cors.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    CartModule,
    CorsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
