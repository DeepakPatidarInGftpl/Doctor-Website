import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductionVoucherComponent } from './add-production-voucher.component';

const routes: Routes = [
  {path:'',component:AddProductionVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductionVoucherRoutingModule { }
