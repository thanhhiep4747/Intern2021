import { ProductsService } from './products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    ProductsRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
