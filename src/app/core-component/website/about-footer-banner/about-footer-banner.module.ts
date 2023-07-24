import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutFooterBannerRoutingModule } from './about-footer-banner-routing.module';
import { AboutFooterBannerComponent } from './about-footer-banner.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    AboutFooterBannerComponent
  ],
  imports: [
    CommonModule,
    AboutFooterBannerRoutingModule,
    SharedModuleModule,
    NgxEditorModule
  ]
})
export class AboutFooterBannerModule { }
