// Import Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import pages
import {
  HomeComponent,
  AboutUsComponent,
  OurClientsComponent,
  ContactUsComponent,
  PageNotFoundComponent,
  ProductsComponent,
  ProductDetailComponent,
  AddProductComponent,
  ProductEditComponent
} from './pages';

// Import components
import {
  HeaderComponent,
  FooterComponent,
  CardComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    OurClientsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    CardComponent,
    AddProductComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
