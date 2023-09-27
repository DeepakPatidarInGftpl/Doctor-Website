import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSaleBillRoutingModule } from './update-sale-bill-routing.module';
import { UpdateSaleBillComponent } from './update-sale-bill.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    UpdateSaleBillComponent
  ],
  imports: [
    CommonModule,
    UpdateSaleBillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateSaleBillModule { }
