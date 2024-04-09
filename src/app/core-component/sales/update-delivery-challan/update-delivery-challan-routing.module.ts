import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDeliveryChallanComponent } from './update-delivery-challan.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateDeliveryChallanComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['change_deliverychallan'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDeliveryChallanRoutingModule { }
