import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPermissionGroupRoutingModule } from './details-permission-group-routing.module';
import { DetailsPermissionGroupComponent } from './details-permission-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DetailsPermissionGroupComponent
  ],
  imports: [
    CommonModule,
    DetailsPermissionGroupRoutingModule,
    SharedModuleModule,
    MatIconModule
  ]
})
export class DetailsPermissionGroupModule { }
