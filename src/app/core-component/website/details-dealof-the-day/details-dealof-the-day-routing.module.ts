import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDealofTheDayComponent } from './details-dealof-the-day.component';

const routes: Routes = [
  {path:'',component:DetailsDealofTheDayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDealofTheDayRoutingModule { }
