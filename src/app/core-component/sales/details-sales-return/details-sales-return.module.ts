import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsSalesReturnRoutingModule } from './details-sales-return-routing.module';
import { DetailsSalesReturnComponent } from './details-sales-return.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsSalesReturnComponent
  ],
  imports: [
    CommonModule,
    DetailsSalesReturnRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsSalesReturnModule { }
