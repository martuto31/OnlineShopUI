import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-women-tshirts',
  templateUrl: './women-tshirts.component.html',
  styleUrls: ['./women-tshirts.component.css']
})
export class WomenTShirtsComponent implements OnInit{
  constructor(private router: Router, private productService: ProductService) {}

  products: IProduct[] = [];

  
  TShirtValue: string = WomenProductsConstant.TShirts;

  public GetProducts(){
    this.productService.getAllProductsByType(this.TShirtValue).subscribe((products: IProduct[]) =>{
      this.products = products;
    })
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  ngOnInit(): void {
    this.GetProducts();
  }
}
