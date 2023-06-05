import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) { }

  productId: number = this.route.snapshot.params['id'];
  product: IProduct = {name: '', id: 0, price: 10, description: 'asd', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}
  cart: Cart = { products: [] };
  showSuccessMessage: boolean = false;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.getProductById(this.productId);
    
    (document.querySelector(".navbar") as HTMLInputElement).style.display = 'none';

    const storedCart = localStorage.getItem('cart');
    if(storedCart != null){
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    }
  }

  getProductById(id: number): any{
    this.productService.getProductById(id).subscribe((product: IProduct) =>{
      this.product = product;
    });
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  addToCart(): void {
    this.cart.products.push(this.product);

    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.showSuccessMessage = true;

    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
  }

  selectPicture(index: number){
    this.currentIndex = index;
  }

  enumToArr(value: any): any[] {
    const keys = Object.keys(value);
    return keys.slice(keys.length / 2);
  }

  goBack(){
    this.location.back();
  }
}
