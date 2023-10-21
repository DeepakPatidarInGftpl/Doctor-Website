import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateJournalVoucherRoutingModule } from './update-journal-voucher-routing.module';
import { UpdateJournalVoucherComponent } from './update-journal-voucher.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UpdateJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    UpdateJournalVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateJournalVoucherModule { }