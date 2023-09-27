import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListJournalVoucherRoutingModule } from './list-journal-voucher-routing.module';
import { ListJournalVoucherComponent } from './list-journal-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    ListJournalVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class ListJournalVoucherModule { }
