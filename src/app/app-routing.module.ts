import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WomenProductsComponent } from './Components/women-products/women-products.component';
import { WomenTShirtsComponent } from './Components/women-products/women-tshirts/women-tshirts.component';
import { WomenHoodiesComponent } from './Components/women-products/women-hoodies/women-hoodies.component';
import { WomenTrousersComponent } from './Components/women-products/women-trousers/women-trousers.component';
import { WomenShortsComponent } from './Components/women-products/women-shorts/women-shorts.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/products/details/product-details/product-details.component';
import { CartComponent } from './Components/products/cart/cart.component';
import { EditProductsComponent } from './Components/products/edit-products/edit-products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'AddProduct', component: ProductsComponent},
  {path: 'Product/:id', component: ProductDetailsComponent},
  {path: 'Edit/:id', component: EditProductsComponent},
  {path: 'Women', component: WomenProductsComponent, children:[
    {path:'TShirts', component: WomenTShirtsComponent},
    {path:'Hoodies', component: WomenHoodiesComponent},
    {path:'Trousers', component: WomenTrousersComponent},
    {path:'Shorts', component: WomenShortsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }