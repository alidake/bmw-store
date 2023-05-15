import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShoppingPageComponent } from './shopping-page.component';


const routes: Routes = [{
  path:"shopping-page",
  component:ShoppingPageComponent
},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ShoppingRoutingModule { }
