import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountlistRoutingModule } from './accountlist-routing.module';
import { AccountlistComponent } from './accountlist.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AccountlistComponent
  ],
  imports: [
    CommonModule,
    AccountlistRoutingModule,
    SweetAlert2Module.forRoot(),
    SharedModuleModule
  ]
})
export class AccountlistModule { }
