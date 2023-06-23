import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { SizeComponent } from './size.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SizeComponent
  ],
  imports: [
    CommonModule,
    SizeRoutingModule,
   SharedModuleModule
  ]
})
export class SizeModule { }
