import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRecieptVoucherComponent } from './details-reciept-voucher.component';

const routes: Routes = [
  {path:'',component:DetailsRecieptVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRecieptVoucherRoutingModule { }
