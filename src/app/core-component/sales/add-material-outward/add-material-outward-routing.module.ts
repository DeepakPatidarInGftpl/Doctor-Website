import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialOutwardComponent } from './add-material-outward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddMaterialOutwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_materialoutward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMaterialOutwardRoutingModule { }
