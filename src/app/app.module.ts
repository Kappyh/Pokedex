import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ROUTING } from "app/app.routing";
import { HttpService } from "app/resources/http.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
