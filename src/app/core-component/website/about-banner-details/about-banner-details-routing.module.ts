import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBannerDetailsComponent } from './about-banner-details.component';

const routes: Routes = [
  {path:'',component:AboutBannerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutBannerDetailsRoutingModule { }
