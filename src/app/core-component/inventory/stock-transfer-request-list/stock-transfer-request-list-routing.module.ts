import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferRequestListComponent } from './stock-transfer-request-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockTransferRequestListComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_transferrequest'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferRequestListRoutingModule { }
