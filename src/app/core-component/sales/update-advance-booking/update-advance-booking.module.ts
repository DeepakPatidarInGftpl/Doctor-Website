import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAdvanceBookingRoutingModule } from './update-advance-booking-routing.module';
import { UpdateAdvanceBookingComponent } from './update-advance-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [UpdateAdvanceBookingComponent
  ],
  imports: [
    CommonModule,
    UpdateAdvanceBookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateAdvanceBookingModule { }
