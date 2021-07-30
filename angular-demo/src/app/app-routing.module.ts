import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about';
import { ClientComponent } from './client';
import { ContactComponent } from './contact';
import { HomeComponent } from './home';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'client', component: ClientComponent},
  {path: 'contact', component: ContactComponent},
  
  //other redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
