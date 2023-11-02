import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCountraVoucherRoutingModule } from './details-countra-voucher-routing.module';
import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsCountraVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsCountraVoucherRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
  ]
})
export class DetailsCountraVoucherModule { }
