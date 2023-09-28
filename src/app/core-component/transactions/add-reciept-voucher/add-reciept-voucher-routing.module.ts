import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecieptVoucherComponent } from './add-reciept-voucher.component';

const routes: Routes = [{path:'',component:AddRecieptVoucherComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRecieptVoucherRoutingModule { }
