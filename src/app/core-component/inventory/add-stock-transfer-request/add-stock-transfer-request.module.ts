import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockTransferRequestRoutingModule } from './add-stock-transfer-request-routing.module';
import { AddStockTransferRequestComponent } from './add-stock-transfer-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AddStockTransferRequestComponent
  ],
  imports: [
    CommonModule,
    AddStockTransferRequestRoutingModule,
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
export class AddStockTransferRequestModule { }
