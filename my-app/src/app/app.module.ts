import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './view/contact/contact.component';
import { AddListComponent } from './view/add-list/add-list.component';
import { FindListComponent } from './view/find-list/find-list.component';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddListComponent,
    FindListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
