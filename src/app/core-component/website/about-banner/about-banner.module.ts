import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutBannerRoutingModule } from './about-banner-routing.module';
import { AboutBannerComponent } from './about-banner.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    AboutBannerComponent
  ],
  imports: [
    CommonModule,
    AboutBannerRoutingModule,
    SharedModuleModule,
    NgxEditorModule
  ]
})
export class AboutBannerModule { }
