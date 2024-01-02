import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'department',loadChildren:()=>import('./list-department/list-department.module').then((m)=>m.ListDepartmentModule)},
  {path:'add-target',loadChildren:()=>import('./add-target/add-target.module').then((m)=>m.AddTargetModule)},
  {path:'update-target/:id',loadChildren:()=>import('./update-target/update-target.module').then((m)=>m.UpdateTargetModule)},
  {path:'list-target',loadChildren:()=>import('./list-target/list-target.module').then((m)=>m.ListTargetModule)},
  {path:'detail-target/:id',loadChildren:()=>import('./details-target/details-target.module').then((m)=>m.DetailsTargetModule)},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmRoutingModule { }
