import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DetailsComponent } from './products/details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/add-product', component: AddProductComponent},
  {path: 'products/:productId', component: DetailsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-clients', component: OurClientsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
