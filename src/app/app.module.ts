import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { MycardsComponent } from './components/mycards/mycards.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    MycardsComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
