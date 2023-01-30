import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditaccountRoutingModule } from './editaccount-routing.module';
import { EditaccountComponent } from './editaccount.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditaccountComponent
  ],
  imports: [
    CommonModule,
    EditaccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditaccountModule { }
