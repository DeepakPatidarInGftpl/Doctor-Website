import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { UpdateStaticPageComponent } from './update-static-page/update-static-page.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    UpdateStaticPageComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ]
})
export class WebsiteModule { }
