import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesBasicRoutingModule } from './tables-basic-routing.module';
import { TablesBasicComponent } from './tables-basic.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TextEditorModule } from '../../element/text-editor/text-editor.module';
import { NgxBarcodeModule } from 'ngx-barcode';
import { RealBarcodeModule } from '../../product/real-barcode/real-barcode.module';

import { DataTableSModule } from '../data-tables/data-tables.module';
@NgModule({
  declarations: [
    TablesBasicComponent
  ],
  imports: [
    CommonModule,
    TablesBasicRoutingModule,
    SharedModuleModule,
  
  
    NgxBarcodeModule,
    RealBarcodeModule,
  
  ],
  exports : [TablesBasicComponent]
})
export class TablesBasicModule { }
