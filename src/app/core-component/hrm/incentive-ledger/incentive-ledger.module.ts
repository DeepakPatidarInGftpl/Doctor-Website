import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncentiveLedgerRoutingModule } from './incentive-ledger-routing.module';
import { IncentiveLedgerComponent } from './incentive-ledger.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    IncentiveLedgerComponent
  ],
  imports: [
    CommonModule,
    IncentiveLedgerRoutingModule,
    SharedModuleModule
  ]
})
export class IncentiveLedgerModule { }
