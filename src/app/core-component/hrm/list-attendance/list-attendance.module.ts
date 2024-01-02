import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAttendanceRoutingModule } from './list-attendance-routing.module';
import { ListAttendanceComponent } from './list-attendance.component';


@NgModule({
  declarations: [
    ListAttendanceComponent
  ],
  imports: [
    CommonModule,
    ListAttendanceRoutingModule
  ]
})
export class ListAttendanceModule { }
