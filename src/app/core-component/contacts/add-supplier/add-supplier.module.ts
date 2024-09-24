import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSupplierRoutingModule } from './add-supplier-routing.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSupplierComponent } from './add-supplier.component';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    AddSupplierRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    MatSelectModule
  ]
})
export class AddSupplierModule { }
