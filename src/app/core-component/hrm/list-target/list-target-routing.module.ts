import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTargetComponent } from './list-target.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListTargetComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_target'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTargetRoutingModule { }
