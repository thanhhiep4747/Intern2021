import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ItemComponent } from './products/product-list/item/item.component';
import { DetailsComponent } from './products/details/details.component'
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import {ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    OurClientsComponent,
    ContactUsComponent,
    ProductsComponent,
    ProductListComponent,
    AddProductComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
