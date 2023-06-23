import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BrandlistComponent
  ],
  imports: [
    CommonModule,
    BrandlistRoutingModule,
   SharedModuleModule
  ]
})
export class BrandlistModule { }
