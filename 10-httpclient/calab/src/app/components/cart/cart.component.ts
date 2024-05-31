import { Component, Signal} from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartSignal: Signal<Product[]>;

  constructor(private cartService: CartService){
    this.cartSignal = this.cartService.getCart();
  }

  public addToCart(product: Product){
    this.cartService.addToCart(product)
  }
}
