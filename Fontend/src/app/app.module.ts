
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import {ROUTES,RouterModule, Routes, Router} from '@angular/router'
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { AppComponent } from './app.component'
import{PropertyCardComponent}from './property/property-card/propety-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from '../app/services/housing.service'
import{UserServiceService} from './services/user-service.service'

import {AddPropertyComponent} from './property/add-property/add-property.component'
import {PropertyDetailsComponent} from './property/property-details/property-details.component'
import {UserRegisterComponent} from './user/user-register/user-register.component'
import {UserLoginComponent} from './user/user-login/user-login.component'
import{AlertifyServiceService} from './services/alertify-service.service'
import {AuthService} from './services/auth.service'
import { from } from 'rxjs';

const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  { path:'add-property',  component:AddPropertyComponent},
  { path:'property-details/:id',  component:PropertyDetailsComponent},
  { path:'user-register',  component:UserRegisterComponent},
  { path:'user-login',  component:UserLoginComponent},
  {path:'**',component:PropertyListComponent},
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserRegisterComponent,
      UserLoginComponent
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
   RouterModule.forRoot(appRoutes),
   FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   BsDropdownModule.forRoot()
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
