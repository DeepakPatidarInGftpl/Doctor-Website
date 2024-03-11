import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWisePurchaseComponent } from '../tax-wise-purchase/tax-wise-purchase.component';
import { TaxWisePurchaseReturnComponent } from './tax-wise-purchase-return.component';

const routes: Routes = [{
  path:'',component:TaxWisePurchaseReturnComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWisePurchaseReturnRoutingModule { }
