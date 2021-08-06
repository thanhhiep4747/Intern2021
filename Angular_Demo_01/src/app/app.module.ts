import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeFlightComponent } from './home/home-flight/home-flight.component';
import {MatCardModule} from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AddProductComponent } from './add-product/add-product.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { NgModel,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';
// import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurClientsComponent,
    ContactUsComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ProductUpdateComponent,
    // HomeFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule,
    // NgModel,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
