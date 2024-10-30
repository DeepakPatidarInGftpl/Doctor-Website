import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSalesReturnRoutingModule } from './add-sales-return-routing.module';
import { AddSalesReturnComponent } from './add-sales-return.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AddSalesReturnComponent
  ],
  imports: [
    CommonModule,
    AddSalesReturnRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class AddSalesReturnModule { }
