import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurClientsComponent } from './our-clients/our-clients.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', redirectTo: '/products', pathMatch: 'full' },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'ourClients', component: OurClientsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
