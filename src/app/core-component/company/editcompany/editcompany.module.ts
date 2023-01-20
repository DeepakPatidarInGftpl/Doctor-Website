import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcompanyRoutingModule } from './editcompany-routing.module';
import { EditcompanyComponent } from './editcompany.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditcompanyComponent
  ],
  imports: [
    CommonModule,
    EditcompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
  ]
})
export class EditcompanyModule { }
