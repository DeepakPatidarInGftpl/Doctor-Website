import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    VendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
   SharedModuleModule
  ]
})
export class VendorModule { }
