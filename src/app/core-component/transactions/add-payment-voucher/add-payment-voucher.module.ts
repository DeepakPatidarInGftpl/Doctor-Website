import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPaymentVoucherRoutingModule } from './add-payment-voucher-routing.module';
import { AddPaymentVoucherComponent } from './add-payment-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AddPaymentVoucherComponent
  ],
  imports: [
    CommonModule,
    AddPaymentVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class AddPaymentVoucherModule { }
