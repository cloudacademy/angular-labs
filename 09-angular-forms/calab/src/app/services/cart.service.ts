import { Injectable, effect, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCart = signal<Product[]>([]);

  constructor() {
    effect(() => {
      console.log(`The current car contains: ${this.currentCart()}`);
    });
  }

  getCart(){
    return this.currentCart;
  }

  addToCart(product: Product){
    this.currentCart.update(list => {
      return [...list, product];
   });
  }
}
