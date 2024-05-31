import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';​
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule ],​
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productForm: FormGroup;
  router = new Router();
  constructor(private productService: ProductService, private formBuilder: FormBuilder){
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price:[0]
    });
  }

  onSubmit(){
    console.log(this.productForm.value);
    this.productService.createProduct(this.productForm.value);
    this.router.navigate(['/product-list']);
  }
}
