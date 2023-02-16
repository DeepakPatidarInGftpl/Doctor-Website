import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsncodedetailsRoutingModule } from './hsncodedetails-routing.module';
import { HsncodedetailsComponent } from './hsncodedetails.component';


@NgModule({
  declarations: [
    HsncodedetailsComponent
  ],
  imports: [
    CommonModule,
    HsncodedetailsRoutingModule
  ]
})
export class HsncodedetailsModule { }
