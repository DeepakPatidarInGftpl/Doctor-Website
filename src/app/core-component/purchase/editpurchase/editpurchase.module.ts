import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditpurchaseRoutingModule } from './editpurchase-routing.module';
import { EditpurchaseComponent } from './editpurchase.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditpurchaseComponent
  ],
  imports: [
    CommonModule,
    EditpurchaseRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    NgMultiSelectDropDownModule.forRoot()  
  ],
  bootstrap: [EditpurchaseComponent]
})
export class EditpurchaseModule { }
