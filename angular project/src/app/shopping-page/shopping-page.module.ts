import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingPageComponent } from './shopping-page.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { Star } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';


const icons = {
  Star
}

@NgModule({
  declarations: [ShoppingPageComponent],
  imports: [ShoppingRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    FeatherModule.pick(icons)
  ]
})
export class ShoppingPageModule { }
