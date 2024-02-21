import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListRoutingModule } from './stock-list-routing.module';
import { StockListComponent } from './stock-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    StockListRoutingModule,
    SharedModuleModule
  ]
})
export class StockListModule { }
