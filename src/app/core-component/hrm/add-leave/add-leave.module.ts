import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLeaveRoutingModule } from './add-leave-routing.module';
import { AddLeaveComponent } from './add-leave.component';


@NgModule({
  declarations: [
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    AddLeaveRoutingModule
  ]
})
export class AddLeaveModule { }
