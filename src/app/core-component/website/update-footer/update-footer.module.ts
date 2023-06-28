import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFooterRoutingModule } from './update-footer-routing.module';
import { UpdateFooterComponent } from './update-footer.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    UpdateFooterComponent
  ],
  imports: [
    CommonModule,
    UpdateFooterRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class UpdateFooterModule { }
