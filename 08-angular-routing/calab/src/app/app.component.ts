import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calab';
  cardComponent = viewChild(CartComponent);


  addToCart(product: Product) {
    this.cardComponent()?.addToCart(product);
  }
}
