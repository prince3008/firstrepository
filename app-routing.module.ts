import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; 
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { from } from 'rxjs';
import { CampComponent } from './camp/camp.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';
import { DonateComponent } from './donate/donate.component';
import { CampformComponent } from './campform/campform.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"login/signup",
    component:SignupComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"camp",
    component:CampComponent
  },
  {
    path:"campform",
    component:CampformComponent
  },
  {
    path:"request",
    component:RequestComponent 
  },
  {
    path:"profile",
    component:ProfileComponent 
  },
  {
    path:"donate",
    component:DonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
