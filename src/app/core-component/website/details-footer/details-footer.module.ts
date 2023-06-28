import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsFooterRoutingModule } from './details-footer-routing.module';
import { DetailsFooterComponent } from './details-footer.component';


@NgModule({
  declarations: [DetailsFooterComponent],
  imports: [
    CommonModule,
    DetailsFooterRoutingModule
  ]
})
export class DetailsFooterModule { }
