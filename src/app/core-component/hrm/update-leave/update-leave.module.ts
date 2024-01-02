import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateLeaveRoutingModule } from './update-leave-routing.module';
import { UpdateLeaveComponent } from './update-leave.component';


@NgModule({
  declarations: [
    UpdateLeaveComponent
  ],
  imports: [
    CommonModule,
    UpdateLeaveRoutingModule
  ]
})
export class UpdateLeaveModule { }
