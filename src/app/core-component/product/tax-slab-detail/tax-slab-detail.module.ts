import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxSlabDetailRoutingModule } from './tax-slab-detail-routing.module';
import { TaxSlabDetailComponent } from './tax-slab-detail.component';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [TaxSlabDetailComponent],
  imports: [
    CommonModule,
    TaxSlabDetailRoutingModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class TaxSlabDetailModule { }
