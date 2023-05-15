import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [{
  path:"about-page",
  component:AboutPageComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AboutRoutingModule { }
