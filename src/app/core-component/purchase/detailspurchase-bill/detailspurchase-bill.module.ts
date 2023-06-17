import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailspurchaseBillRoutingModule } from './detailspurchase-bill-routing.module';
import { DetailspurchaseBillComponent } from './detailspurchase-bill.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailspurchaseBillComponent
  ],
  imports: [
    CommonModule,
    DetailspurchaseBillRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailspurchaseBillModule { }
