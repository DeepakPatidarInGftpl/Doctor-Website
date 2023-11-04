import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTermsDetailsRoutingModule } from './payment-terms-details-routing.module';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { PaymentTermsDetailsComponent } from './payment-terms-details.component';

@NgModule({
  declarations: [
    PaymentTermsDetailsComponent
  ],
  imports: [
    CommonModule,
    PaymentTermsDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class PaymentTermsDetailsModule { }
