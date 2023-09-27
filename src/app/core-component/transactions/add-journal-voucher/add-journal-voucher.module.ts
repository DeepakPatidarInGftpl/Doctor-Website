import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddJournalVoucherRoutingModule } from './add-journal-voucher-routing.module';
import { AddJournalVoucherComponent } from './add-journal-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AddJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    AddJournalVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class AddJournalVoucherModule { }
