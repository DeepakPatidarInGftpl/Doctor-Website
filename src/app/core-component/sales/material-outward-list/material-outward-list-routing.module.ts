import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialOutwardListComponent } from './material-outward-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:MaterialOutwardListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_materialoutward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialOutwardListRoutingModule { }
