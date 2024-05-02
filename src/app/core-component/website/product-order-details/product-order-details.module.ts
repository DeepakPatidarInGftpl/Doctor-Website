import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductOrderDetailsRoutingModule } from './product-order-details-routing.module';
import { ProductOrderDetailsComponent } from './product-order-details.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    ProductOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductOrderDetailsRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSelectModule,
  ]
})
export class ProductOrderDetailsModule { }
