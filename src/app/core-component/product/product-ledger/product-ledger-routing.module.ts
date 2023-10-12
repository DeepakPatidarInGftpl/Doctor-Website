import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLedgerComponent } from './product-ledger.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ProductLedgerComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_productledger','change_productledger','delete_productledger','view_productledger'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductLedgerRoutingModule { }
