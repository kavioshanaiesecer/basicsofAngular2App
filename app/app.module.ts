import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';
import { AboutComponent }  from './components/about.component';
import {routing} from './app.routing';
import {ContactComponent} from './components/contact.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, ContactComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
