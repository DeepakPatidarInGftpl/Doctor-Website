import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMembershipComponent } from './add-membership.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddMembershipComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_membership']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMembershipRoutingModule { }
