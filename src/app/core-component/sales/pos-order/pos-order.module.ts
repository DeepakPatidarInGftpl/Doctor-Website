import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosOrderRoutingModule } from './pos-order-routing.module';
import { PosOrderComponent } from './pos-order.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    PosOrderComponent
  ],
  imports: [
    CommonModule,
    PosOrderRoutingModule,
    SharedModuleModule
  ]
})
export class PosOrderModule { }
