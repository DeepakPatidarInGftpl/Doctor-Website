import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealBarcodeRoutingModule } from './real-barcode-routing.module';
import { RealBarcodeComponent } from './real-barcode.component';
import { NgxBarcodeModule } from 'ngx-barcode';


@NgModule({
  declarations: [
    RealBarcodeComponent
  ],
  imports: [
    CommonModule,
    RealBarcodeRoutingModule,
    NgxBarcodeModule
  ],
  exports:[
    RealBarcodeComponent
  ]
})
export class RealBarcodeModule { }
