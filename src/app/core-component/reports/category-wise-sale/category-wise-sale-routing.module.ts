import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryWiseSaleComponent } from './category-wise-sale.component';

const routes: Routes = [{
  path:'',component:CategoryWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryWiseSaleRoutingModule { }
