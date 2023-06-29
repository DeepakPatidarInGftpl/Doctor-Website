import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArrivalBannerRoutingModule } from './new-arrival-banner-routing.module';
import { NewArrivalBannerComponent } from './new-arrival-banner.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    NewArrivalBannerComponent
  ],
  imports: [
    CommonModule,
    NewArrivalBannerRoutingModule,
    SharedModuleModule,
    NgxEditorModule
  ]
})
export class NewArrivalBannerModule { }
