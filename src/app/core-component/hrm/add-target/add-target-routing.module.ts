import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTargetComponent } from './add-target.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddTargetComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_target'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTargetRoutingModule { }
