import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../constants/women-products-type';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent {
  constructor(private router: Router, private productService: ProductService) {}

  products: IProduct[] = [];

  TShirtValue: string = WomenProductsConstant.TShirts;
  HoodiesValue: string = WomenProductsConstant.Hoodies;
  TrousersValue: string = WomenProductsConstant.Trousers;
  ShortsValue: string = WomenProductsConstant.Shorts;

  public GetProducts(type: string){
    this.productService.getAllProductsByType(type).subscribe((products: IProduct[]) =>{
      this.products = products;
    })
  }
}
