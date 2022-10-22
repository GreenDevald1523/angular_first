import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Japan } from './components/japan/japan.component';
import { Header } from './components/header/header.component';
import { City } from './components/city/city.component';

@NgModule({
  declarations: [AppComponent, Japan, Header, City],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
