import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintMaterialInwardRoutingModule } from './print-material-inward-routing.module';
import { PrintMaterialInwardComponent } from './print-material-inward.component';
import { DatepickerModule } from 'ng2-datepicker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    PrintMaterialInwardComponent
  ],
  imports: [
    CommonModule,
    PrintMaterialInwardRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, MatDialogModule,
  ]
})
export class PrintMaterialInwardModule { }
