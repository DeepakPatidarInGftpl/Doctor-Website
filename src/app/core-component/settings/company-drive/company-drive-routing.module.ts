import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDriveComponent } from './company-drive.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:CompanyDriveComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_companydrive', 'change_companydrive', 'delete_companydrive', 'view_companydrive'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyDriveRoutingModule { }
