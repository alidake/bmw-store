import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { RegisterPageModule } from './register-page/register-page.module';
import { ShoppingPageModule } from './shopping-page/shopping-page.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './login-page/login-page.module';
import { SellersPageComponent } from './sellers-page/sellers-page.component';
import { SellersPageModule } from './sellers-page/sellers-page.module';
import { ChangePasswordModule } from './change-password/change-password.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    AppRoutingModule,
    ShoppingPageModule,
    AboutPageModule,
    NavBarModule,
    FooterModule,
    RegisterPageModule, ChangePasswordModule,
    LoginPageModule,
    HttpClientModule,
    SellersPageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// /^(0([2-468-9]\d{7}|[5|7]\d{8}))$/
