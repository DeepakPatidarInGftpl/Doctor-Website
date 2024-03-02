import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeWiseSaleComponent } from './time-wise-sale.component';

const routes: Routes = [{
  path:'',component:TimeWiseSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeWiseSaleRoutingModule { }
