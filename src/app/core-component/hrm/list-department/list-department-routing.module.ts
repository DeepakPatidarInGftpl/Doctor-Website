import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './list-department.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListDepartmentComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_department', 'change_department', 'delete_department', 'view_department'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDepartmentRoutingModule { }
