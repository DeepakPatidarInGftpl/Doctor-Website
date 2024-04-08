import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailDeliveryChallanComponent } from './detail-delivery-challan.component';

const routes: Routes = [
  {path:'',component:DetailDeliveryChallanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDeliveryChallanRoutingModule { }
