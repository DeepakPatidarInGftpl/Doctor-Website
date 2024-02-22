import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCompanyDriveComponent } from './detail-company-drive.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailCompanyDriveComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_companydrive'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCompanyDriveRoutingModule { }
