import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FeatherModule } from 'angular-feather';
import { Facebook,  Github ,Instagram,Twitter,Share2 } from 'angular-feather/icons';

const icons={
Facebook,
Github,
Instagram,
Twitter,
Share2
}

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],exports:[
    FooterComponent
  ]
})
export class FooterModule { }
