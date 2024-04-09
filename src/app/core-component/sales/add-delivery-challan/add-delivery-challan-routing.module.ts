import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryChallanComponent } from './add-delivery-challan.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddDeliveryChallanComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_deliverychallan'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDeliveryChallanRoutingModule { }
