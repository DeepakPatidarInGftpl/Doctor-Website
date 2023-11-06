import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFooterBannerDetailsComponent } from './about-footer-banner-details.component';

const routes: Routes = [
  {path:'',component:AboutFooterBannerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutFooterBannerDetailsRoutingModule { }
