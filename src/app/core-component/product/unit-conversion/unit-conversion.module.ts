import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitConversionRoutingModule } from './unit-conversion-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { UnitConversionComponent } from './unit-conversion.component';

@NgModule({
  declarations: [
    UnitConversionComponent
  ],
  imports: [
    CommonModule,
    UnitConversionRoutingModule,
    SharedModuleModule
  ]
})
export class UnitConversionModule { }
