import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTargetRoutingModule } from './list-target-routing.module';
import { ListTargetComponent } from './list-target.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListTargetComponent
  ],
  imports: [
    CommonModule,
    ListTargetRoutingModule,
    SharedModuleModule
  ]
})
export class ListTargetModule { }
