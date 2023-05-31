import { Component } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = { products: []}
  totalPrice: number = 0;

  ngOnInit(){
    const cart = localStorage.getItem('cart');
    
    if(cart != null){
      this.cart = cart ? JSON.parse(cart) : [];
    }

    this.totalPrice = this.calculateTotalPriceFromCart();
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  removeFromCart(id: number){
    const index = this.cart.products.findIndex((product) => product.id === id);

    this.cart.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  calculateTotalPriceFromCart(){
    var totalPrice = 0;
    this.cart.products.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  }
}
