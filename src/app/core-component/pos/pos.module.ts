import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';
import { InovoiceComponent } from './inovoice/inovoice.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { MatSelectModule } from '@angular/material/select';
import { AddPaymentVoucherModule } from '../transactions/add-payment-voucher/add-payment-voucher.module';
import { PosAddPaymentVoucherComponent } from './pos-add-payment-voucher/pos-add-payment-voucher.component';
import { PosAddExpenseVoucherComponent } from './pos-add-expense-voucher/pos-add-expense-voucher.component';
import { PosAddReceiptsVoucherComponent } from './pos-add-receipts-voucher/pos-add-receipts-voucher.component';
import { PosAddCreditNoteComponent } from './pos-add-credit-note/pos-add-credit-note.component';

@NgModule({
  declarations: [
    PosComponent,
    InovoiceComponent,
    PosAddPaymentVoucherComponent,
    PosAddExpenseVoucherComponent,
    PosAddReceiptsVoucherComponent,
    PosAddCreditNoteComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    SharedModuleModule,
    MatSelectModule
  ]
})
export class PosModule { }
