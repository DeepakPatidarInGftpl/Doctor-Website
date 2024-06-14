import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockPreviewRoutingModule } from './stock-preview-routing.module';
import { StockPreviewComponent } from './stock-preview.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    StockPreviewComponent
  ],
  imports: [
    CommonModule,
    StockPreviewRoutingModule,
    SharedModuleModule
  ]
})
export class StockPreviewModule { }
