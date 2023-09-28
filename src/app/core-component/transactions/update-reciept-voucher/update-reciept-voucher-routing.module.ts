import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateRecieptVoucherComponent } from './update-reciept-voucher.component';

const routes: Routes = [
  {path:'',component:UpdateRecieptVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRecieptVoucherRoutingModule { }
