import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EstimateListRoutingModule } from './estimate-list-routing.module';
import { EstimateListComponent } from './estimate-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    EstimateListComponent
  ],
  imports: [
    CommonModule,
    EstimateListRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ], 
   providers:[
    DatePipe
  ],
})
export class EstimateListModule { }
