import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponDetailsComponent } from './coupon-details.component';

const routes: Routes = [
  {path:'',component:CouponDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponDetailsRoutingModule { }
