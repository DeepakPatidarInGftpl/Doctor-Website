import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingAndReviewComponent } from './rating-and-review.component';

const routes: Routes = [
  {path:'',component:RatingAndReviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingAndReviewRoutingModule { }
