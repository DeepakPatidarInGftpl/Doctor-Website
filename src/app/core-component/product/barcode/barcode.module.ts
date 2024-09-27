import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeRoutingModule } from './barcode-routing.module';
import { BarcodeComponent } from './barcode.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RealBarcodeModule } from '../real-barcode/real-barcode.module';
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
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    RealBarcodeModule
  ]
})
export class BarcodeModule { }
