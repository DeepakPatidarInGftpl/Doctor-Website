import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealOfTheDayComponent } from './deal-of-the-day.component';

const routes: Routes = [{path:'',component:DealOfTheDayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealOfTheDayRoutingModule { }
