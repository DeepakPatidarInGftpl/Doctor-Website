import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferDetailsRoutingModule } from './stock-transfer-details-routing.module';
import { StockTransferDetailsComponent } from './stock-transfer-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockTransferDetailsComponent
  ],
  imports: [
    CommonModule,
    StockTransferDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class StockTransferDetailsModule { }
