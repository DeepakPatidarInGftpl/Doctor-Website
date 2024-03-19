import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAtendanceComponent } from './details-atendance.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsAtendanceComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_attendance'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsAtendanceRoutingModule { }