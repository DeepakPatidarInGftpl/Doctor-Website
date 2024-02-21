import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstockVerificationRoutingModule } from './addstock-verification-routing.module';
import { AddstockVerificationComponent } from './addstock-verification.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [AddstockVerificationComponent],
  imports: [
    CommonModule,
    AddstockVerificationRoutingModule,
    SharedModuleModule,
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
export class AddstockVerificationModule { }
