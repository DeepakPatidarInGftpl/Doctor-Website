import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAttendanceComponent } from './list-attendance.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListAttendanceComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_attendance'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAttendanceRoutingModule { }
