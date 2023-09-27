import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateJournalVoucherRoutingModule } from './update-journal-voucher-routing.module';
import { UpdateJournalVoucherComponent } from './update-journal-voucher.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UpdateJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    UpdateJournalVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class UpdateJournalVoucherModule { }
