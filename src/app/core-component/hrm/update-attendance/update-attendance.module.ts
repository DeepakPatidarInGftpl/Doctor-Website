import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAttendanceRoutingModule } from './update-attendance-routing.module';
import { UpdateAttendanceComponent } from './update-attendance.component';


@NgModule({
  declarations: [
    UpdateAttendanceComponent
  ],
  imports: [
    CommonModule,
    UpdateAttendanceRoutingModule
  ]
})
export class UpdateAttendanceModule { }
