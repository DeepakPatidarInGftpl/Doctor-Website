import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPermissionGroupComponent } from './details-permission-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsPermissionGroupComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_group']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPermissionGroupRoutingModule { }