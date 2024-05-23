import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Output() addToCartEvent = new EventEmitter<Product>();
  @Input() product!: Product;

  onAddToCartClicked(){
    this.addToCartEvent.emit(this.product);
  }
}
