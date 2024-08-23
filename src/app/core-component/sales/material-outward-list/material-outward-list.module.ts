import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MaterialOutwardListRoutingModule } from './material-outward-list-routing.module';
import { MaterialOutwardListComponent } from './material-outward-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MaterialOutwardListComponent
  ],
  imports: [
    CommonModule,
    MaterialOutwardListRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
})
export class MaterialOutwardListModule { }
