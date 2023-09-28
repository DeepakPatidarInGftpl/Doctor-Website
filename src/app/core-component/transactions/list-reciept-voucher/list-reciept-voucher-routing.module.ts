import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecieptVoucherComponent } from './list-reciept-voucher.component';

const routes: Routes = [
  {path:'',component:ListRecieptVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecieptVoucherRoutingModule { }
