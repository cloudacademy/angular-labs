import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}
  @Output() addToCartEvent = new EventEmitter<Product>();

  cart: Product[] = [];
  products: Product[] = this.productService.getProducts();

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }
}
