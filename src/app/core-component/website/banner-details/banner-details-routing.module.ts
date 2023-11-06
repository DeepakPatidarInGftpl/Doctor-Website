import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerDetailsComponent } from './banner-details.component';

const routes: Routes = [
  {path:'',component:BannerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerDetailsRoutingModule { }
