import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExpensesRoutingModule } from './list-expenses-routing.module';
import { ListExpensesComponent } from './list-expenses.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListExpensesComponent
  ],
  imports: [
    CommonModule,
    ListExpensesRoutingModule,
    SharedModuleModule
  ]
})
export class ListExpensesModule { }
