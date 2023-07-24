import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterFeaturesRoutingModule } from './footer-features-routing.module';
import { FooterFeaturesComponent } from './footer-features.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [FooterFeaturesComponent],
  imports: [
    CommonModule,
    FooterFeaturesRoutingModule,
  SharedModuleModule
  ]
})
export class FooterFeaturesModule { }
