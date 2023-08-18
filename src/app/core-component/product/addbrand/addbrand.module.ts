import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbrandRoutingModule } from './addbrand-routing.module';
import { AddbrandComponent } from './addbrand.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AddbrandComponent,
  ],
  imports: [
    CommonModule,
    AddbrandRoutingModule,SharedModuleModule,
  ]
})
export class AddbrandModule { }
