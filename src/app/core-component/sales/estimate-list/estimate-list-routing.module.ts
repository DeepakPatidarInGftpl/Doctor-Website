import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateListComponent } from './estimate-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:EstimateListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_estimate']} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateListRoutingModule { }
