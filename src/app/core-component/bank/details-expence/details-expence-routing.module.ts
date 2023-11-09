import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsExpenceComponent } from './details-expence.component';

const routes: Routes = [
  {path:'',component:DetailsExpenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsExpenceRoutingModule { }
