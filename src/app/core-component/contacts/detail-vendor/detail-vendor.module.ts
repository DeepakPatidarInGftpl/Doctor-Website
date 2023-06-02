import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailVendorRoutingModule } from './detail-vendor-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetailVendorComponent } from './detail-vendor.component';

@NgModule({
  declarations: [
    DetailVendorComponent
  ],
  imports: [
    CommonModule,
    DetailVendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class DetailVendorModule { }
