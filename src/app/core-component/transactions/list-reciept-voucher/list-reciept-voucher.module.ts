import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecieptVoucherRoutingModule } from './list-reciept-voucher-routing.module';
import { ListRecieptVoucherComponent } from './list-reciept-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ListRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    ListRecieptVoucherRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ListRecieptVoucherModule { }
