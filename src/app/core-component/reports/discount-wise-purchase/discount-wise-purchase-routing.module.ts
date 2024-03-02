import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountWisePurchaseComponent } from './discount-wise-purchase.component';

const routes: Routes = [{
  path:'',component:DiscountWisePurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountWisePurchaseRoutingModule { }
