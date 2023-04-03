import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStaticPageRoutingModule } from './add-static-page-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { AddStaticPageComponent } from './add-static-page.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    AddStaticPageComponent
  ],
  imports: [
    CommonModule,
    AddStaticPageRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    NgxEditorModule
  ]
})
export class AddStaticPageModule { }
