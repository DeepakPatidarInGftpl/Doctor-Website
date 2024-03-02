import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandWiseSaleComponent } from './brand-wise-sale.component';

const routes: Routes = [{
  path:'',component:BrandWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandWiseSaleRoutingModule { }
