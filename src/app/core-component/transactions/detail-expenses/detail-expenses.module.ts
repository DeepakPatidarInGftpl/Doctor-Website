import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailExpensesRoutingModule } from './detail-expenses-routing.module';
import { DetailExpensesComponent } from './detail-expenses.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DetailExpensesComponent
  ],
  imports: [
    CommonModule,
    DetailExpensesRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class DetailExpensesModule { }
