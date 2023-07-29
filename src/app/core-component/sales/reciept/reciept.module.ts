import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieptRoutingModule } from './reciept-routing.module';
import { RecieptComponent } from './reciept.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    RecieptComponent
  ],
  imports: [
    CommonModule,
    RecieptRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class RecieptModule { }
