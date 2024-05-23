import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cart: Product[] = [];
  products: Product[] = [
    new Product('Product A',  10.99), 
    new Product('Product B',  7.59), 
    new Product('Product C',  3.20)
  ];

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
