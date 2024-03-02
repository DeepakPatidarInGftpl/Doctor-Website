import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWiseSaleComponent } from './product-wise-sale.component';

const routes: Routes = [{
  path:'',component:ProductWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductWiseSaleRoutingModule { }
