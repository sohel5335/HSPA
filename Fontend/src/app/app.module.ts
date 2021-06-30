



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import{PropertyCardComponent}from './property/property-card/propety-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
