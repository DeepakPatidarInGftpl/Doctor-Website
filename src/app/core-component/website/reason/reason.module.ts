import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonRoutingModule } from './reason-routing.module';
import { ReasonComponent } from './reason.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ReasonComponent
  ],
  imports: [
    CommonModule,
    ReasonRoutingModule,
    SharedModuleModule
  ]
})
export class ReasonModule { }
