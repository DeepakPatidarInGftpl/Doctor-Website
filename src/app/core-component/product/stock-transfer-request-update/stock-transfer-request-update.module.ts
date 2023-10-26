import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRequestUpdateRoutingModule } from './stock-transfer-request-update-routing.module';
import { StockTransferRequestUpdateComponent } from './stock-transfer-request-update.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    StockTransferRequestUpdateComponent
  ],
  imports: [
    CommonModule,
    StockTransferRequestUpdateRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class StockTransferRequestUpdateModule { }
