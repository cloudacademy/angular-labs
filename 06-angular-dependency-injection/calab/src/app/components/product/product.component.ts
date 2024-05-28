import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';​
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ZoomOnHooverDirective } from '../../directives/zoom-on-hoover.directive';
import { TooltipDirective } from '../../directives/tooltip.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe, ZoomOnHooverDirective, TooltipDirective],
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
