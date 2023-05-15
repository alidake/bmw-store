import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import {Search} from 'angular-feather/icons';

const icons={
Search
}

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule.pick(icons)
  ],exports:[NavBarComponent]
})
export class NavBarModule { }
