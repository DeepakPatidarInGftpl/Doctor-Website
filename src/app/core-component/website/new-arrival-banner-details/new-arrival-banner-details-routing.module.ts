import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalBannerDetailsComponent } from './new-arrival-banner-details.component';

const routes: Routes = [
  {path:'',component:NewArrivalBannerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalBannerDetailsRoutingModule { }
