import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalBannerComponent } from './new-arrival-banner.component';

const routes: Routes = [
  {path:'',component:NewArrivalBannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalBannerRoutingModule { }
