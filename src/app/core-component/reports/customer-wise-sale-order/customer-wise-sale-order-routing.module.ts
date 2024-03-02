import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerWiseSaleOrderComponent } from './customer-wise-sale-order.component';

const routes: Routes = [{
  path:'',component:CustomerWiseSaleOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerWiseSaleOrderRoutingModule { }
