import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'department', loadChildren: () => import('./list-department/list-department.module').then((m) => m.ListDepartmentModule) },
  { path: 'detail-department/:id', loadChildren: () => import('./detail-department/detail-department.module').then((m) => m.DetailDepartmentModule) },
  { path: 'list-attendance', loadChildren: () => import('./list-attendance/list-attendance.module').then((m) => m.ListAttendanceModule) },
  { path: 'add-attendance', loadChildren: () => import('./add-attendance/add-attendance.module').then((m) => m.AddAttendanceModule) },
  { path: 'detail-attendance/:id', loadChildren: () => import('./details-atendance/details-atendance.module').then((m) => m.DetailsAtendanceModule) },

  { path: 'add-target', loadChildren: () => import('./add-target/add-target.module').then((m) => m.AddTargetModule) },
  { path: 'update-target/:id', loadChildren: () => import('./update-target/update-target.module').then((m) => m.UpdateTargetModule) },
  { path: 'list-target', loadChildren: () => import('./list-target/list-target.module').then((m) => m.ListTargetModule) },
  { path: 'detail-target/:id', loadChildren: () => import('./details-target/details-target.module').then((m) => m.DetailsTargetModule) },

  {path:'incentive-ledger',loadChildren:()=>import('./incentive-ledger/incentive-ledger.module').then((m)=>m.IncentiveLedgerModule)},
{path:'incentive',loadChildren:()=>import('./incentive-ledger-employee/incentive-ledger-employee.module').then((m)=>m.IncentiveLedgerEmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmRoutingModule { }
