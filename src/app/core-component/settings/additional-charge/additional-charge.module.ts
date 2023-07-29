import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalChargeRoutingModule } from './additional-charge-routing.module';
import { AdditionalChargeComponent } from './additional-charge.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AdditionalChargeComponent
  ],
  imports: [
    CommonModule,
    AdditionalChargeRoutingModule,
    SharedModuleModule
  ]
})
export class AdditionalChargeModule { }
