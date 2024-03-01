import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWiseSaleReturnComponent } from './tax-wise-sale-return.component';

const routes: Routes = [{
  path:'',component:TaxWiseSaleReturnComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWiseSaleReturnRoutingModule { }
