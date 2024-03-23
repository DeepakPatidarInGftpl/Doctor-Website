import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdvanceBookingRoutingModule } from './add-advance-booking-routing.module';
import { AddAdvanceBookingComponent } from './add-advance-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddAdvanceBookingComponent
  ],
  imports: [
    CommonModule,
    AddAdvanceBookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddAdvanceBookingModule { }
