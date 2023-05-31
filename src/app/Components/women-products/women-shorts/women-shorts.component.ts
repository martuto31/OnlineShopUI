import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-women-shorts',
  templateUrl: './women-shorts.component.html',
  styleUrls: ['./women-shorts.component.css']
})
export class WomenShortsComponent {
  constructor(private router: Router, private productService: ProductService) {}

  products: IProduct[] = [];
  
  ShortsValue: string = WomenProductsConstant.Shorts;

  public GetProducts(){
    this.productService.getAllProductsByType(this.ShortsValue).subscribe((products: IProduct[]) =>{
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
