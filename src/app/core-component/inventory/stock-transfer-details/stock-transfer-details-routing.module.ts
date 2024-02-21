import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';
import { StockTransferDetailsComponent } from './stock-transfer-details.component';

const routes: Routes = [
  {path:'',component:StockTransferDetailsComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_stocktransfer'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferDetailsRoutingModule { }
