import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMembershipRoutingModule } from './add-membership-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { AddMembershipComponent } from './add-membership.component';


@NgModule({
  declarations: [
    AddMembershipComponent
  ],
  imports: [
    CommonModule,
    AddMembershipRoutingModule,
    SharedModuleModule
  ]
})
export class AddMembershipModule { }
