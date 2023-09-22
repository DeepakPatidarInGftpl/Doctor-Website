import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSalesReturnRoutingModule } from './update-sales-return-routing.module';
import { UpdateSalesReturnComponent } from './update-sales-return.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UpdateSalesReturnComponent
  ],
  imports: [
    CommonModule,
    UpdateSalesReturnRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateSalesReturnModule { }
