import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellersPageComponent } from './sellers-page.component';

const routes: Routes = [{
  path: "sellers-page",
  component: SellersPageComponent
}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SellersPageRoutingModule { }

