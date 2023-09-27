import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';

const routes: Routes = [
  {path:'',component:DetailsCountraVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCountraVoucherRoutingModule { }
