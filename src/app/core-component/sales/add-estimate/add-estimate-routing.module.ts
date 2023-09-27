import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstimateComponent } from './add-estimate.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddEstimateComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_estimate']} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEstimateRoutingModule { }
