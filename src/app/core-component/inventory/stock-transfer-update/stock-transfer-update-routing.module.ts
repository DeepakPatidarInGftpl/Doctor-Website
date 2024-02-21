import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTransferUpdateComponent } from './stock-transfer-update.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:StockTransferUpdateComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['change_stocktransfer'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTransferUpdateRoutingModule { }
