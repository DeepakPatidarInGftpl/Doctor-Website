import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSaleBillRoutingModule } from './add-sale-bill-routing.module';
import { AddSaleBillComponent } from './add-sale-bill.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaymentsModule } from '../../payments/payments.module';
@NgModule({
  declarations: [
    AddSaleBillComponent
  ],
  imports: [
    CommonModule,
    AddSaleBillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    PaymentsModule
  ]
})
export class AddSaleBillModule { }
