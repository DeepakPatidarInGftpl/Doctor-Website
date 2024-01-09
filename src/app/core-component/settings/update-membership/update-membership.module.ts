import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMembershipRoutingModule } from './update-membership-routing.module';
import { UpdateMembershipComponent } from './update-membership.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UpdateMembershipComponent
  ],
  imports: [
    CommonModule,
    UpdateMembershipRoutingModule,
    SharedModuleModule
  ]
})
export class UpdateMembershipModule { }
