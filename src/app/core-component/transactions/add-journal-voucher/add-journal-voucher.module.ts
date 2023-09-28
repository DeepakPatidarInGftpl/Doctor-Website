import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddJournalVoucherRoutingModule } from './add-journal-voucher-routing.module';
import { AddJournalVoucherComponent } from './add-journal-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    AddJournalVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddJournalVoucherModule { }
