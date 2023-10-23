import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockTransferComponent } from './add-stock-transfer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddStockTransferComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_stocktransfer'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStockTransferRoutingModule { }
