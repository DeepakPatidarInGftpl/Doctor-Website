import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerWiseSaleComponent } from './customer-wise-sale.component';

const routes: Routes = [{
  path:'',component:CustomerWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerWiseSaleRoutingModule { }
