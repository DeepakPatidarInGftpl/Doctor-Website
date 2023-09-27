import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCountraVoucherComponent } from './update-countra-voucher.component';

const routes: Routes = [
  {path:'',component:UpdateCountraVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCountraVoucherRoutingModule { }
