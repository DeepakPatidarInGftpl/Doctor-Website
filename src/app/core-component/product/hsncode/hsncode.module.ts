import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsncodeRoutingModule } from './hsncode-routing.module';
import { HsncodeComponent } from './hsncode.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    HsncodeComponent
  ],
  imports: [
    CommonModule,
    HsncodeRoutingModule,
    SharedModuleModule
  ]
})
export class HsncodeModule { }
