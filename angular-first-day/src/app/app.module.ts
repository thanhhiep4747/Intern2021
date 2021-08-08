import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { ProductComponent } from './product/product.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product/product/product.service';
import { AddItemComponent } from './add-item/add-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';


import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    ClientsComponent,
    ProductComponent,
    ProductDetailComponent,
    AddItemComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'product-details/:id', component: ProductDetailComponent},
      {path: 'product', component: ProductComponent},
      {path: 'about', component: AboutComponent},
      {path: 'client', component: ClientsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
