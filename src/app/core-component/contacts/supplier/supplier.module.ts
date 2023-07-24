import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModuleModule
  ]
})
export class SupplierModule { }
