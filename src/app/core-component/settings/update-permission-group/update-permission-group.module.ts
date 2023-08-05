import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePermissionGroupRoutingModule } from './update-permission-group-routing.module';
import { UpdatePermissionGroupComponent } from './update-permission-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UpdatePermissionGroupComponent
  ],
  imports: [
    CommonModule,
    UpdatePermissionGroupRoutingModule,
    SharedModuleModule
  ]
})
export class UpdatePermissionGroupModule { }