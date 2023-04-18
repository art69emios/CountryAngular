import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDeteilsComponent } from './components/country-deteils/country-deteils.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './components/country/country.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CountryDeteilsComponent,
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    CountryInfoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
