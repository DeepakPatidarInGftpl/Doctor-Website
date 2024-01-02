import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTargetRoutingModule } from './add-target-routing.module';
import { AddTargetComponent } from './add-target.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AddTargetComponent
  ],
  imports: [
    CommonModule,
    AddTargetRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class AddTargetModule { }
