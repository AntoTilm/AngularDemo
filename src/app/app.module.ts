import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';

import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFrBe from '@angular/common/locales/fr-BE';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthTokenInterceptor } from './shared/interceptors/auth-token.interceptor';

registerLocaleData(localeFrBe);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports : [],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE"},
    { provide : HTTP_INTERCEPTORS, useClass : AuthTokenInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
