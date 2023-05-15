import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { RouterModule } from '@angular/router';
import { NavBarModule } from '../nav-bar/nav-bar.module';





@NgModule({
  declarations:[
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    RouterModule,
  ]
})
export class LandingPageModule { }
