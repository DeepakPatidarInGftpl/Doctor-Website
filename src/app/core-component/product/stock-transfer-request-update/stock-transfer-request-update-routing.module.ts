import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferRequestUpdateComponent } from './stock-transfer-request-update.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockTransferRequestUpdateComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['change_transferrequest'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferRequestUpdateRoutingModule { }
