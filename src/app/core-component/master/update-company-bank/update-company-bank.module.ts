import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCompanyBankRoutingModule } from './update-company-bank-routing.module';
import { UpdateCompanyBankComponent } from './update-company-bank.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    UpdateCompanyBankComponent
  ],
  imports: [
    CommonModule,
    UpdateCompanyBankRoutingModule,
    SharedModuleModule,
    SharedModuleModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateCompanyBankModule { }
