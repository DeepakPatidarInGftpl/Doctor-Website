import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockVerificationRoutingModule } from './stock-verification-routing.module';
import { StockVerificationComponent } from './stock-verification.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    StockVerificationComponent
  ],
  imports: [
    CommonModule,
    StockVerificationRoutingModule,
    SharedModuleModule,
    
  ]
})
export class StockVerificationModule { }
