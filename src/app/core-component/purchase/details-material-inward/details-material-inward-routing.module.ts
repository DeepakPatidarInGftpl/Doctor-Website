import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMaterialInwardComponent } from './details-material-inward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsMaterialInwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_materialinward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMaterialInwardRoutingModule { }
