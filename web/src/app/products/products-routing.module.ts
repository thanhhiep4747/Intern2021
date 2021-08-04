import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'products/:proId', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
