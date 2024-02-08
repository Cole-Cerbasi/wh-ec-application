/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<% if (routing) { %>
import { AppRoutingModule } from './app-routing.module';<% } %>
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule<% if (routing) { %>,
    AppRoutingModule<% } %>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
// app.module.ts

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarGComponent } from './navbar-g/navbar-g.component';
import { FooterGComponent } from './footer-g/footer-g.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    NavbarGComponent,
    FooterGComponent,
    ItemCardComponent,
    ItemCarouselComponent,
  ],
  bootstrap: [],
})
export class AppModule { }
*/

/*
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarGComponent } from './navbar-g/navbar-g.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, NavbarGComponent ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
*/
