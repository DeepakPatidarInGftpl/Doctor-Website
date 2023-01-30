import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehousedetailsRoutingModule } from './warehousedetails-routing.module';
import { WarehousedetailsComponent } from './warehousedetails.component';


@NgModule({
  declarations: [
    WarehousedetailsComponent
  ],
  imports: [
    CommonModule,
    WarehousedetailsRoutingModule
  ]
})
export class WarehousedetailsModule { }
