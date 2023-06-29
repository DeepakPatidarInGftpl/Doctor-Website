import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBannerComponent } from './about-banner.component';

const routes: Routes = [
  {path:'',component:AboutBannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutBannerRoutingModule { }
