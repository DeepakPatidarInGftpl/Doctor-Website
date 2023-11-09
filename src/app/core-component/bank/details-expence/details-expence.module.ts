import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsExpenceRoutingModule } from './details-expence-routing.module';
import { DetailsExpenceComponent } from './details-expence.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DetailsExpenceComponent
  ],
  imports: [
    CommonModule,
    DetailsExpenceRoutingModule,
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
export class DetailsExpenceModule { }
