import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMaterialConsumptionRoutingModule } from './list-material-consumption-routing.module';
import { ListMaterialConsumptionComponent } from './list-material-consumption.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ListMaterialConsumptionComponent],
  imports: [
    CommonModule,
    ListMaterialConsumptionRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ListMaterialConsumptionModule { }
