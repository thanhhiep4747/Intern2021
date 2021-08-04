import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurClientsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductsModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'aboutUs', component: AboutUsComponent },
    //   { path: 'ourClients', component: OurClientsComponent },
    //   { path: 'contactUs', component: ContactUsComponent },
    //   { path: '**', component: NotFoundComponent },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
