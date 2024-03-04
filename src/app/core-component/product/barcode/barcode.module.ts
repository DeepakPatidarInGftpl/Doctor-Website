import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeRoutingModule } from './barcode-routing.module';
import { BarcodeComponent } from './barcode.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BarcodeComponent
  ],
  imports: [
    CommonModule,
    BarcodeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
    SharedModuleModule
  ]
})
export class BarcodeModule { }
