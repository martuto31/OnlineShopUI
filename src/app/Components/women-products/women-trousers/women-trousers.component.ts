import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-women-trousers',
  templateUrl: './women-trousers.component.html',
  styleUrls: ['./women-trousers.component.css']
})
export class WomenTrousersComponent implements OnInit{
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {}

  products: IProduct[] = [];
  isAdmin: boolean = false;
  TrousersValue: string = WomenProductsConstant.Trousers;

  ngOnInit(): void {
    this.GetProducts();

    this.userService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

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
}
