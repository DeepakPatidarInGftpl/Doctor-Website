import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFooterBannerComponent } from './about-footer-banner.component';

const routes: Routes = [
  {path:'',component:AboutFooterBannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutFooterBannerRoutingModule { }
