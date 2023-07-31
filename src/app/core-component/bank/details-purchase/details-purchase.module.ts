import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPurchaseRoutingModule } from './details-purchase-routing.module';

import { SharedModuleModule } from '../../shared-module/shared-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetailsPurchaseComponent } from './details-purchase.component';

@NgModule({
  declarations: [
    DetailsPurchaseComponent
  ],
  imports: [
    CommonModule,
    DetailsPurchaseRoutingModule,
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
export class DetailsPurchaseModule { }
