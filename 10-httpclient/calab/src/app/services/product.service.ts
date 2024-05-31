import { Injectable } from '@angular/core';
import  DATA from './MOCK_DATA.json';
import { LoggerService } from './logger/logger.service';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
  constructor(private logger: LoggerService) { 
    this.products = DATA;
  }

  getProducts(){
    this.logger.log('Fetching Products');
    return this.products;
  }

  createProduct(product: Product){
    product.id = this.products.length;
    this.products.push(product);
  }
}
