import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCountraVoucherRoutingModule } from './list-countra-voucher-routing.module';
import { ListCountraVoucherComponent } from './list-countra-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ListCountraVoucherComponent],
  imports: [
    CommonModule,
    ListCountraVoucherRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ListCountraVoucherModule { }
