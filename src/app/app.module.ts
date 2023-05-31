import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { NavComponent } from './Components/Shared/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { WomenProductsComponent } from './Components/women-products/women-products.component';
import { MenProductsComponent } from './Components/men-products/men-products.component';
import { KidsProductsComponent } from './Components/kids-products/kids-products.component';
import { WomenTShirtsComponent } from './Components/women-products/women-tshirts/women-tshirts.component';
import { WomenHoodiesComponent } from './Components/women-products/women-hoodies/women-hoodies.component';
import { WomenTrousersComponent } from './Components/women-products/women-trousers/women-trousers.component';
import { WomenShortsComponent } from './Components/women-products/women-shorts/women-shorts.component';
import { ProductDetailsComponent } from './Components/products/details/product-details/product-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { CartComponent } from './Components/products/cart/cart.component';
import { AComponent } from './Components/a/a.component';
import { MenHoodiesComponent } from './Components/men-hoodies/men-hoodies.component';
import { MenShortsComponent } from './Components/men-products/men-shorts/men-shorts.component';
import { MenTrousersComponent } from './Components/men-products/men-trousers/men-trousers.component';
import { MenTshirtsComponent } from './Components/men-products/men-tshirts/men-tshirts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    NavComponent,
    HomeComponent,
    WomenProductsComponent,
    MenProductsComponent,
    KidsProductsComponent,
    WomenTShirtsComponent,
    WomenHoodiesComponent,
    WomenTrousersComponent,
    WomenShortsComponent,
    ProductDetailsComponent,
    CartComponent,
    AComponent,
    MenHoodiesComponent,
    MenShortsComponent,
    MenTrousersComponent,
    MenTshirtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
