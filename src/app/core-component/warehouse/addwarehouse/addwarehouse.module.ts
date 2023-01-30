import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddwarehouseRoutingModule } from './addwarehouse-routing.module';
import { AddwarehouseComponent } from './addwarehouse.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddwarehouseComponent
  ],
  imports: [
    CommonModule,
    AddwarehouseRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddwarehouseModule { }
