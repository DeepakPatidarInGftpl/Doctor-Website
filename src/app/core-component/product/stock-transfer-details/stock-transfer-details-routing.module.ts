import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferDetailsModule } from './stock-transfer-details.module';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockTransferDetailsModule,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_stocktransfer'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferDetailsRoutingModule { }
