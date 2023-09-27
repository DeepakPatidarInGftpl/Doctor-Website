import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMaterialInwardComponent } from '../../purchase/details-material-inward/details-material-inward.component';
import { DetailsMaterialOutwardComponent } from './details-material-outward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsMaterialOutwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_materialoutward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMaterialOutwardRoutingModule { }
