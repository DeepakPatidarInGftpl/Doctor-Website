import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddExpensesRoutingModule } from './add-expenses-routing.module';
import { AddExpensesComponent } from './add-expenses.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AddExpensesComponent
  ],
  imports: [
    CommonModule,
    AddExpensesRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddExpensesModule { }
