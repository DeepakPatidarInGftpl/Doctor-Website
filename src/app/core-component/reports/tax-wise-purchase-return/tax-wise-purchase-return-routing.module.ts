import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWisePurchaseComponent } from '../tax-wise-purchase/tax-wise-purchase.component';

const routes: Routes = [{
  path:'',component:TaxWisePurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWisePurchaseReturnRoutingModule { }
