import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEstimateRoutingModule } from './add-estimate-routing.module';
import { AddEstimateComponent } from './add-estimate.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AddEstimateComponent
  ],
  imports: [
    CommonModule,
    AddEstimateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddEstimateModule { }
