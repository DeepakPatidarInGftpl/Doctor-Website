import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPurchaseRoutingModule } from './details-purchase-routing.module';
import { DetailsPurchaseComponent } from './details-purchase.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsPurchaseComponent
  ],
  imports: [
    CommonModule,
    DetailsPurchaseRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsPurchaseModule { }
