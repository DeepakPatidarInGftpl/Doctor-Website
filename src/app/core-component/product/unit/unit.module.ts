import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UnitComponent
  ],
  imports: [
    CommonModule,
    UnitRoutingModule,
   SharedModuleModule
  ]
})
export class UnitModule { }
