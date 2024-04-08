import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductionVoucherComponent } from './detail-production-voucher.component';

const routes: Routes = [
  {path:'',component:DetailProductionVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProductionVoucherRoutingModule { }
