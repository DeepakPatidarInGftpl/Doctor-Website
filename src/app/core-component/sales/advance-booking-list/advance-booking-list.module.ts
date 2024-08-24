import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdvanceBookingListRoutingModule } from './advance-booking-list-routing.module';
import { AdvanceBookingListComponent } from './advance-booking-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AdvanceBookingListComponent
  ],
  imports: [
    CommonModule,
    AdvanceBookingListRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
})
export class AdvanceBookingListModule { }
