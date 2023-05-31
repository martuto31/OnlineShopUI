import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../../constants/women-products-type';

@Component({
  selector: 'app-women-trousers',
  templateUrl: './women-trousers.component.html',
  styleUrls: ['./women-trousers.component.css']
})
export class WomenTrousersComponent implements OnInit{
  constructor(private router: Router, private productService: ProductService) {}

  products: IProduct[] = [];
  
  TrousersValue: string = WomenProductsConstant.Trousers;

  public GetProducts(){
    this.productService.getAllProductsByType(this.TrousersValue).subscribe((products: IProduct[]) =>{
      this.products = products;
    })
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  redirectToDetails(id: number){
    this.router.navigate(['/Product/' + id])
  }

  ngOnInit(): void {
    this.GetProducts();
  }
}
