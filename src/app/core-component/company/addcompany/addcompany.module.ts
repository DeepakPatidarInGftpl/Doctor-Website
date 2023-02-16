import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcompanyRoutingModule } from './addcompany-routing.module';
import { AddcompanyComponent } from './addcompany.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddcompanyComponent
  ],
  imports: [
    CommonModule,
    AddcompanyRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddcompanyModule { }
