import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountLedgerPreviewRoutingModule } from './account-ledger-preview-routing.module';
import { AccountLedgerPreviewComponent } from './account-ledger-preview.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AccountLedgerPreviewComponent
  ],
  imports: [
    CommonModule,
    AccountLedgerPreviewRoutingModule,
    SharedModuleModule
  ]
})
export class AccountLedgerPreviewModule { }
