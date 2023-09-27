import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountraVoucherComponent } from './add-countra-voucher.component';

const routes: Routes = [
  {path:'',component:AddCountraVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCountraVoucherRoutingModule { }
