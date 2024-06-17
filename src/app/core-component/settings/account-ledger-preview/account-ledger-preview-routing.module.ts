import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLedgerPreviewComponent } from './account-ledger-preview.component';

const routes: Routes = [
  {
    path: '',
    component: AccountLedgerPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountLedgerPreviewRoutingModule { }
