import { Component, effect, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  currentCart = signal<Product[]>([]);
  constructor(){
    effect(() => {
      console.log(`The current car contains: ${this.currentCart()}`);
    });
  }

  public addToCart(product: Product){
    this.currentCart.update(list => {
      return [...list, product];
   })
  }
}
