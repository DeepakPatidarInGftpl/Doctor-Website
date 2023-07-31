import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExpenseRoutingModule } from './list-expense-routing.module';
import { ListExpenseComponent } from './list-expense.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListExpenseComponent
  ],
  imports: [
    CommonModule,
    ListExpenseRoutingModule,
    SharedModuleModule
  ]
})
export class ListExpenseModule { }
