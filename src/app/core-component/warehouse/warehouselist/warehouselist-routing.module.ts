import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouselistComponent } from './warehouselist.component';

const routes: Routes = [{path:'',component:WarehouselistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouselistRoutingModule { }
