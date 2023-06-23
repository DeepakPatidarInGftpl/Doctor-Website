import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTermsRoutingModule } from './payment-terms-routing.module';
import { PaymentTermsComponent } from './payment-terms.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    PaymentTermsComponent
  ],
  imports: [
    CommonModule,
    PaymentTermsRoutingModule,
    SharedModuleModule
  ]
})
export class PaymentTermsModule { }
