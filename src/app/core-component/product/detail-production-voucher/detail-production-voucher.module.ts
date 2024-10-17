import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductionVoucherRoutingModule } from './detail-production-voucher-routing.module';
import { DetailProductionVoucherComponent } from './detail-production-voucher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    DetailProductionVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailProductionVoucherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule
  ]
})
export class DetailProductionVoucherModule { }
