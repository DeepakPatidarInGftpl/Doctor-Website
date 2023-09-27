import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateEstimateRoutingModule } from './update-estimate-routing.module';
import { UpdateEstimateComponent } from './update-estimate.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UpdateEstimateComponent
  ],
  imports: [
    CommonModule,
    UpdateEstimateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateEstimateModule { }
