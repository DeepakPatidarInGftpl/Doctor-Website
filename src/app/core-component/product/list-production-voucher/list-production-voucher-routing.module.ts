import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductionVoucherComponent } from './list-production-voucher.component';

const routes: Routes = [
  {path:'',component:ListProductionVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductionVoucherRoutingModule { }
