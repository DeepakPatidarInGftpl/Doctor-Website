import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceBookingListRoutingModule } from './advance-booking-list-routing.module';
import { AdvanceBookingListComponent } from './advance-booking-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [AdvanceBookingListComponent
  ],
  imports: [
    CommonModule,
    AdvanceBookingListRoutingModule,
    SharedModuleModule
  ]
})
export class AdvanceBookingListModule { }
