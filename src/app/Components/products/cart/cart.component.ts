import { Component } from '@angular/core';
import { Cart } from 'src/app/Models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = { products: []}

  ngOnInit(){
    const cart = localStorage.getItem('cart');
    
    if(cart != null){
      this.cart = cart ? JSON.parse(cart) : [];
    }
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  removeFromCart(id: number){
    const index = this.cart.products.findIndex((product) => product.id === id);

    this.cart.products.splice(index, 1);
  }
}
