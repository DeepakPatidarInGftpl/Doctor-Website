import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockTransferRequestComponent } from './add-stock-transfer-request.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddStockTransferRequestComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_transferrequest'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStockTransferRequestRoutingModule { }
