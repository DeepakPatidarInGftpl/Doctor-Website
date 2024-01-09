import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMembershipComponent } from './update-membership.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateMembershipComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_membership']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMembershipRoutingModule { }
