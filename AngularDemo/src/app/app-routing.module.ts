import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import pages
import { 
  AboutUsComponent,
  ContactUsComponent,
  HomeComponent,
  OurClientsComponent,
  PageNotFoundComponent,
  ProductDetailComponent,
  ProductsComponent,
  AddProductComponent,
  ProductEditComponent
} from './pages';

const routes: Routes = [
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'edit-product/:id',
    component: ProductEditComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'our-clients',
    component: OurClientsComponent
  },
  { 
    path: '', 
    redirectTo: '/products', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component:  PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
