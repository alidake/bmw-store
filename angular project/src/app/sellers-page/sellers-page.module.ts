import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellersPageRoutingModule } from './sellers-page-routing.module';
import { SellersPageComponent } from './sellers-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellersPageComponent
  ],
  imports: [
    CommonModule,
    SellersPageRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SellersPageModule { }
