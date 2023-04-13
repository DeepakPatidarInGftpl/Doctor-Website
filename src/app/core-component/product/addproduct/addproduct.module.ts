import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductRoutingModule } from './addproduct-routing.module';
import { AddproductComponent } from './addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    AddproductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class AddproductModule { }
