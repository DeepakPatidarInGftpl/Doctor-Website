import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyBankRoutingModule } from './company-bank-routing.module';
import { CompanyBankComponent } from './company-bank.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    CompanyBankComponent
  ],
  imports: [
    CommonModule,
    CompanyBankRoutingModule,
    SharedModuleModule
  ]
})
export class CompanyBankModule { }
