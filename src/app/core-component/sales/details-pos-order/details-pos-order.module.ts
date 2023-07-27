import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPosOrderRoutingModule } from './details-pos-order-routing.module';
import { DetailsPosOrderComponent } from './details-pos-order.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [DetailsPosOrderComponent],
  imports: [
    CommonModule,
    DetailsPosOrderRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class DetailsPosOrderModule { }
