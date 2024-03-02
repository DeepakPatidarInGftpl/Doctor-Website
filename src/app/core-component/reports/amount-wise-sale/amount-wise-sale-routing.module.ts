import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountWiseSaleComponent } from './amount-wise-sale.component';

const routes: Routes = [{
  path:'',component:AmountWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmountWiseSaleRoutingModule { }
