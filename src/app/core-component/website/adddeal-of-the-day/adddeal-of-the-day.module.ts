import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddealOfTheDayRoutingModule } from './adddeal-of-the-day-routing.module';
import { AdddealOfTheDayComponent } from './adddeal-of-the-day.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AdddealOfTheDayComponent
  ],
  imports: [
    CommonModule,
    AdddealOfTheDayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AdddealOfTheDayModule { }
