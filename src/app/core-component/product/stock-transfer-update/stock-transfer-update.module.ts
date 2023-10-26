import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferUpdateRoutingModule } from './stock-transfer-update-routing.module';
import { StockTransferUpdateComponent } from './stock-transfer-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    StockTransferUpdateComponent
  ],
  imports: [
    CommonModule,
    StockTransferUpdateRoutingModule,
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
export class StockTransferUpdateModule { }
