import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDeliveryChallanComponent } from './list-delivery-challan.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListDeliveryChallanComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_deliverychallan'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDeliveryChallanRoutingModule { }
