import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {path:'',redirectTo:'warehouselist',pathMatch:'full'},
{path:'',children:[
  {path:'warehouselist',loadChildren:()=>import('./warehouselist/warehouselist.module').then((m)=>m.WarehouselistModule)},
  {path:'addwarehouse',loadChildren:()=>import('./addwarehouse/addwarehouse.module').then((m)=>m.AddwarehouseModule)},
  {path:'editwarehouse/:id',loadChildren:()=>import('./editwarehouse/editwarehouse.module').then((m)=>m.EditwarehouseModule)},
  {path:'warehouse-details/:id',loadChildren:()=>import('./warehousedetails/warehousedetails.module').then((m)=>m.WarehousedetailsModule)}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
