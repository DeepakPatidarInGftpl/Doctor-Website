import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddealOfTheDayComponent } from './adddeal-of-the-day.component';

const routes: Routes = [
  {path:'',component:AdddealOfTheDayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddealOfTheDayRoutingModule { }
