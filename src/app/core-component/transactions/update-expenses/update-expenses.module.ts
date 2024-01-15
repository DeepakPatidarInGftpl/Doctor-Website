import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateExpensesRoutingModule } from './update-expenses-routing.module';
import { UpdateExpensesComponent } from './update-expenses.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UpdateExpensesComponent
  ],
  imports: [
    CommonModule,
    UpdateExpensesRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateExpensesModule { }
