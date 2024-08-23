import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SaleBillListRoutingModule } from './sale-bill-list-routing.module';
import { SaleBillListComponent } from './sale-bill-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    SaleBillListComponent
  ],
  imports: [
    CommonModule,
    SaleBillListRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
})
export class SaleBillListModule { }
