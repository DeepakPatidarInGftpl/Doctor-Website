import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsSaleBillRoutingModule } from './details-sale-bill-routing.module';
import { DetailsSaleBillComponent } from './details-sale-bill.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsSaleBillComponent
  ],
  imports: [
    CommonModule,
    DetailsSaleBillRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsSaleBillModule { }
