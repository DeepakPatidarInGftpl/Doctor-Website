import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTargetComponent } from './details-target.component';

const routes: Routes = [
  {path:'',component:DetailsTargetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsTargetRoutingModule { }
