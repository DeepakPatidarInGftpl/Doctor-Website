import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPagesComponent } from './static-pages.component';

import { StaticPagesRoutingModule } from './static-pages-routing.module';

import { StaticpageDetalsComponent } from './staticpage-detals/staticpage-detals.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    StaticPagesComponent,
   
    StaticpageDetalsComponent,
 
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModuleModule
  ]
})
export class StaticPagesModule { }
