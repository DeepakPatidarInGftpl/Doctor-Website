import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTransportRoutingModule } from './add-transport-routing.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTransportComponent } from './add-transport.component';

@NgModule({
  declarations: [
    AddTransportComponent
  ],
  imports: [
    CommonModule,
    AddTransportRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddTransportModule { }
