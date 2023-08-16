import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './add-branch.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddBranchComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_branch']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBranchRoutingModule { }
