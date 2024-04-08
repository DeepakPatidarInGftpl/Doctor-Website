import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDeliveryChallanRoutingModule } from './update-delivery-challan-routing.module';
import { UpdateDeliveryChallanComponent } from './update-delivery-challan.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UpdateDeliveryChallanComponent],
  imports: [
    CommonModule,
    UpdateDeliveryChallanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateDeliveryChallanModule { }
