import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMaterialOutwardComponent } from './update-material-outward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateMaterialOutwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_materialoutward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMaterialOutwardRoutingModule { }
