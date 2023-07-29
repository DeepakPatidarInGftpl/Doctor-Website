import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountdetailsRoutingModule } from './accountdetails-routing.module';
import { AccountdetailsComponent } from './accountdetails.component';


@NgModule({
  declarations: [
    AccountdetailsComponent
  ],
  imports: [
    CommonModule,
    AccountdetailsRoutingModule
  ]
})
export class AccountdetailsModule { }
