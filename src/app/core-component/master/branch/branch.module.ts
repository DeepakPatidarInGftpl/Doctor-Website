import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    BranchRoutingModule,
    SharedModuleModule
  ]
})
export class BranchModule { }
