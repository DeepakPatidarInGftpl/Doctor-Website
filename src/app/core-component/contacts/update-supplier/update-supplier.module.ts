import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSupplierRoutingModule } from './update-supplier-routing.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateSupplierComponent } from './update-supplier.component';

@NgModule({
  declarations: [
    UpdateSupplierComponent
  ],
  imports: [
    CommonModule,
    UpdateSupplierRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateSupplierModule { }
