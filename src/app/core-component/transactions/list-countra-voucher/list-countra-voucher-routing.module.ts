import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountraVoucherComponent } from './list-countra-voucher.component';

const routes: Routes = [
  {path:'',component:ListCountraVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCountraVoucherRoutingModule { }
