import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddaccountRoutingModule } from './addaccount-routing.module';
import { AddaccountComponent } from './addaccount.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddaccountComponent
  ],
  imports: [
    CommonModule,
    AddaccountRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddaccountModule { }
