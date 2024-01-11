import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMembershipComponent } from './detail-membership.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailMembershipComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_customer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMembershipRoutingModule { }
