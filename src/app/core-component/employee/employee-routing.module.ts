import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'employeelist',pathMatch:'full'},
  {path:'',children:[
    {path:'employeelist',loadChildren:()=>import('./employee-list/employee-list.module').then((m)=>m.EmployeeListModule)},
    {path:'addemployee',loadChildren:()=>import('./addemployee/addemployee.module').then((m)=>m.AddemployeeModule)},
    {path:'editemployee/:id',loadChildren:()=>import('./editemployee/editemployee.module').then((m)=>m.EditemployeeModule)},
    {path:'employee-details/:id',loadChildren:()=>import('./employeedetails/employeedetails.module').then((m)=>m.EmployeedetailsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
