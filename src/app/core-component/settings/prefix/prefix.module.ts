import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefixRoutingModule } from './prefix-routing.module';
import { PrefixComponent } from './prefix.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    PrefixComponent
  ],
  imports: [
    CommonModule,
    PrefixRoutingModule,
    SharedModuleModule
  ]
})
export class PrefixModule { }
