import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCompanyBankRoutingModule } from './details-company-bank-routing.module';
import { DetailsCompanyBankComponent } from './details-company-bank.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DetailsCompanyBankComponent
  ],
  imports: [
    CommonModule,
    DetailsCompanyBankRoutingModule,
    SharedModuleModule
  ]
})
export class DetailsCompanyBankModule { }
