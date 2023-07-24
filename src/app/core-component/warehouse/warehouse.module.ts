import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';

import { SharedModuleModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    SharedModuleModule
  ]
})
export class WarehouseModule { }
