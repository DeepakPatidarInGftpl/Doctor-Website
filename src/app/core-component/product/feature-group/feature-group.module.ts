import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureGroupRoutingModule } from './feature-group-routing.module';
import { FeatureGroupComponent } from './feature-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [FeatureGroupComponent],
  imports: [
    CommonModule,
    FeatureGroupRoutingModule,
    SharedModuleModule
  ]
})
export class FeatureGroupModule { }
