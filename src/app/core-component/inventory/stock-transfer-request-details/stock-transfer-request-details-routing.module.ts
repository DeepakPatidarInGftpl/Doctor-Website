import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferRequestDetailsComponent } from './stock-transfer-request-details.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockTransferRequestDetailsComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_transferrequest'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferRequestDetailsRoutingModule { }
