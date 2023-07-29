import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCompanyBankRoutingModule } from './add-company-bank-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { AddCompanyBankComponent } from './add-company-bank.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCompanyBankComponent],
  imports: [
    CommonModule,
    AddCompanyBankRoutingModule,
    SharedModuleModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddCompanyBankModule { }
