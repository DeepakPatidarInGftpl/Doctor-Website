import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAttendanceRoutingModule } from './list-attendance-routing.module';
import { ListAttendanceComponent } from './list-attendance.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListAttendanceComponent
  ],
  imports: [
    CommonModule,
    ListAttendanceRoutingModule,
    SharedModuleModule
  ]
})
export class ListAttendanceModule { }
