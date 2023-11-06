import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateStaticPageRoutingModule } from './update-static-page-routing.module';
import { UpdateStaticPageComponent } from './update-static-page.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { NgxEditorModule } from 'ngx-editor';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
@NgModule({
  declarations: [
    UpdateStaticPageComponent
  ],
  imports: [
    CommonModule,
    UpdateStaticPageRoutingModule,
    SharedModuleModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    NgxEditorModule
  ]
})
export class UpdateStaticPageModule { }
