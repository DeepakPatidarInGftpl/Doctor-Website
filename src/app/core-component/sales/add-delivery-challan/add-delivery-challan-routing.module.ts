import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryChallanComponent } from './add-delivery-challan.component';

const routes: Routes = [
  {path:'',component:AddDeliveryChallanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDeliveryChallanRoutingModule { }
