import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { UserService } from 'src/app/Services/user.service';
import { Cart } from 'src/app/Models/Cart';

@Component({
  selector: 'app-women-hoodies',
  templateUrl: './women-hoodies.component.html',
  styleUrls: ['./women-hoodies.component.css']
})
export class WomenHoodiesComponent {
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {}

  products: IProduct[] = [];
  cart: Cart = { products: [] };
  isAdmin: boolean = false;
  HoodiesValue: string = WomenProductsConstant.Hoodies;

  ngOnInit(): void {
    this.GetProducts();

    this.userService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    const storedCart = localStorage.getItem('cart');
    if(storedCart != null){
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    }
  }

  public GetProducts(){
    this.productService.getAllProductsByType(this.HoodiesValue).subscribe((products: IProduct[]) =>{
      this.products = products;
    })
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  redirectToDetails(id: number){
    this.router.navigate(['/Product/' + id])
  }

  addToCart(product: IProduct): void {
    this.cart.products.push(product);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteProduct(id: number){
    console.log(id);
    this.productService.deleteProduct(id).subscribe(
      () => {
        // Product deleted successfully, update the product list
        this.products = this.products.filter(product => product.id !== id);
      }
    );
  }

  editProduct(id: number){
    this.router.navigate([`/Edit/${id}`]);
  }
}
