import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsJournalVoucherRoutingModule } from './details-journal-voucher-routing.module';
import { DetailsJournalVoucherComponent } from './details-journal-voucher.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsJournalVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsJournalVoucherRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsJournalVoucherModule { }
