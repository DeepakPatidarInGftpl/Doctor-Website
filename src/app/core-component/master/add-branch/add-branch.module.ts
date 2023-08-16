import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBranchRoutingModule } from './add-branch-routing.module';
import { AddBranchComponent } from './add-branch.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AddBranchComponent
  ],
  imports: [
    CommonModule,
    AddBranchRoutingModule,
    SharedModuleModule
  ]
})
export class AddBranchModule { }
