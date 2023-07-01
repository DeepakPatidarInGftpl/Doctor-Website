import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingAndReviewRoutingModule } from './rating-and-review-routing.module';
import { RatingAndReviewComponent } from './rating-and-review.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    RatingAndReviewComponent
  ],
  imports: [
    CommonModule,
    RatingAndReviewRoutingModule,
    SharedModuleModule
  ]
})
export class RatingAndReviewModule { }
