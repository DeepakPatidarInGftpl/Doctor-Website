import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeliveryChallanRoutingModule } from './add-delivery-challan-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddDeliveryChallanComponent } from './add-delivery-challan.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AddDeliveryChallanComponent],
  imports: [
    CommonModule,
    AddDeliveryChallanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class AddDeliveryChallanModule { }
