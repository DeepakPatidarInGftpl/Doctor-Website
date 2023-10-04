import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPaymentVoucherRoutingModule } from './details-payment-voucher-routing.module';
import { DetailsPaymentVoucherComponent } from './details-payment-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DetailsPaymentVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsPaymentVoucherRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ]
})
export class DetailsPaymentVoucherModule { }
