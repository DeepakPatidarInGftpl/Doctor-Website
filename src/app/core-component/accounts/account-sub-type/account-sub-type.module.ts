import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSubTypeRoutingModule } from './account-sub-type-routing.module';
import { AccountSubTypeComponent } from './account-sub-type.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    AccountSubTypeComponent
  ],
  imports: [
    CommonModule,
    AccountSubTypeRoutingModule,
    SharedModuleModule
  ]
})
export class AccountSubTypeModule { }
