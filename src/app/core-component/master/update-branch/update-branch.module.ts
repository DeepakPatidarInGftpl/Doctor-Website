import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateBranchRoutingModule } from './update-branch-routing.module';
import { UpdateBranchComponent } from './update-branch.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UpdateBranchComponent
  ],
  imports: [
    CommonModule,
    UpdateBranchRoutingModule,
    SharedModuleModule
  ]
})
export class UpdateBranchModule { }
