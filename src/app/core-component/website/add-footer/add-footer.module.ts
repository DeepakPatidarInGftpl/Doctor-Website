import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFooterRoutingModule } from './add-footer-routing.module';
import { AddFooterComponent } from './add-footer.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
@NgModule({
  declarations: [AddFooterComponent],
  imports: [
    CommonModule,
    AddFooterRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class AddFooterModule { }
