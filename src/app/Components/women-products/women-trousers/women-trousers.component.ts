import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { WomenProductsConstant } from '../../constants/women-products-type';
import { UserService } from 'src/app/Services/user.service';
import { Cart } from 'src/app/Models/Cart';

@Component({
  selector: 'app-women-trousers',
  templateUrl: './women-trousers.component.html',
  styleUrls: ['./women-trousers.component.css']
})
export class WomenTrousersComponent implements OnInit{
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {}

  products: IProduct[] = [];
  cart: Cart = { products: [] };
  isAdmin: boolean = false;
  TrousersValue: string = WomenProductsConstant.Trousers;
  showNotification: boolean = false;
  skipCount: number = 0;
  activeNotificationId: string = '';

  ngOnInit(): void {
    this.GetProducts(this.skipCount);

    this.userService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    const storedCart = localStorage.getItem('cart');
    if(storedCart != null){
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    }
  }

  public GetProducts(skipCount: number){
    this.productService.getAllProductsByType(this.TrousersValue, skipCount).subscribe((products: IProduct[]) =>{
      products.forEach((product: IProduct) => {
        this.products.push(product);
      });
    })
  }

  showMore(){
    this.skipCount = this.products.length;
    this.GetProducts(this.skipCount);
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  redirectToDetails(id: number){
    this.router.navigate(['/Product/' + id])
  }

  addToCart(product: IProduct, index: number): void {
    this.cart.products.push(product);

    this.activeNotificationId = index.toString();

    setTimeout(() => {
      this.activeNotificationId = '';
    }, 2000);

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
