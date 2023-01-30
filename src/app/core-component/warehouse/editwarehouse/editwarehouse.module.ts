import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditwarehouseRoutingModule } from './editwarehouse-routing.module';
import { EditwarehouseComponent } from './editwarehouse.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditwarehouseComponent
  ],
  imports: [
    CommonModule,
    EditwarehouseRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditwarehouseModule { }
