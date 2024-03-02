import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockLedgerComponent } from './stock-ledger.component';

const routes: Routes = [{
  path:'',component:StockLedgerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockLedgerRoutingModule { }
