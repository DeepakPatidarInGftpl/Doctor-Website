import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTrendingProductsRoutingModule } from './details-trending-products-routing.module';
import { DetailsTrendingProductsComponent } from './details-trending-products.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsTrendingProductsComponent
  ],
  imports: [
    CommonModule,
    DetailsTrendingProductsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsTrendingProductsModule { }
