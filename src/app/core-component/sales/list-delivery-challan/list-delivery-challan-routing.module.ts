import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDeliveryChallanComponent } from './list-delivery-challan.component';

const routes: Routes = [
  {path:'',component:ListDeliveryChallanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDeliveryChallanRoutingModule { }
