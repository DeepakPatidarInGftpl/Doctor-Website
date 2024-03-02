import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWiseSaleComponent } from './tax-wise-sale.component';

const routes: Routes = [{
  path:'',component:TaxWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWiseSaleRoutingModule { }
