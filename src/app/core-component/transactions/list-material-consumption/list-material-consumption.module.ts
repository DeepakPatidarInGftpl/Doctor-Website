import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMaterialConsumptionRoutingModule } from './list-material-consumption-routing.module';
import { ListMaterialConsumptionComponent } from './list-material-consumption.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [ListMaterialConsumptionComponent],
  imports: [
    CommonModule,
    ListMaterialConsumptionRoutingModule,
    SharedModuleModule
  ]
})
export class ListMaterialConsumptionModule { }
