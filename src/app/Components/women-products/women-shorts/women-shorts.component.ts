import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-women-shorts',
  templateUrl: './women-shorts.component.html',
  styleUrls: ['./women-shorts.component.css']
})
export class WomenShortsComponent {
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {}

  products: IProduct[] = [];
  isAdmin: boolean = false;
  ShortsValue: string = WomenProductsConstant.Shorts;

  ngOnInit(): void {
    this.GetProducts();

    this.userService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

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
}
