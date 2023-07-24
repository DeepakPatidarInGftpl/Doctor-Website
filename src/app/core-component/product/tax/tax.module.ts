import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    TaxComponent
  ],
  imports: [
    CommonModule,
    TaxRoutingModule,
    SharedModuleModule
  ]
})
export class TaxModule { }
