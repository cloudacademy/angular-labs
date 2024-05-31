import { Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: 'create-product', component: CreateProductComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: '', redirectTo: '/product-list', pathMatch: 'full' }
];