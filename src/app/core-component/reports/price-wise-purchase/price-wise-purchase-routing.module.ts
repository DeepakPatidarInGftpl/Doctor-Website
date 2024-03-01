import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceWisePurchaseComponent } from './price-wise-purchase.component';

const routes: Routes = [{
  path:'',component:PriceWisePurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceWisePurchaseRoutingModule { }
