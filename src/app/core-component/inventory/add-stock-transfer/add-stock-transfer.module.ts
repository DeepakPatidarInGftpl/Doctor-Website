import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockTransferRoutingModule } from './add-stock-transfer-routing.module';
import { AddStockTransferComponent } from './add-stock-transfer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    AddStockTransferComponent
  ],
  imports: [
    CommonModule,
    AddStockTransferRoutingModule,
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
export class AddStockTransferModule { }
