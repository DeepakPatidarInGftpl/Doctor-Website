import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousedetailsComponent } from './warehousedetails.component';

const routes: Routes = [{path:'',component:WarehousedetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousedetailsRoutingModule { }
