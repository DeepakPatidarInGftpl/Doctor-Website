import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailDepartmentComponent } from './detail-department.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailDepartmentComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_department'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDepartmentRoutingModule { }
