import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductLabelRoutingModule } from './details-product-label-routing.module';
import { DetailsProductLabelComponent } from './details-product-label.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DetailsProductLabelComponent
  ],
  imports: [
    CommonModule,
    DetailsProductLabelRoutingModule,
    SharedModuleModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class DetailsProductLabelModule { }
