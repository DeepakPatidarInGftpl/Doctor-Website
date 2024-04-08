import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDeliveryChallanComponent } from './update-delivery-challan.component';

const routes: Routes = [
  {path:'',component:UpdateDeliveryChallanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDeliveryChallanRoutingModule { }
