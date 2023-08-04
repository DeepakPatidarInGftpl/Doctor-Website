import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPosOrderComponent } from './details-pos-order.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsPosOrderComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_posorder'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPosOrderRoutingModule { }
