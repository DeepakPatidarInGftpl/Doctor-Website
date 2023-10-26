import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRequestDetailsRoutingModule } from './stock-transfer-request-details-routing.module';
import { StockTransferRequestDetailsComponent } from './stock-transfer-request-details.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockTransferRequestDetailsComponent
  ],
  imports: [
    CommonModule,
    StockTransferRequestDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class StockTransferRequestDetailsModule { }
