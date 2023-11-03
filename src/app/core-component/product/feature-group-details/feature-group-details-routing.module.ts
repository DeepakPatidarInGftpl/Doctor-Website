import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGroupDetailsComponent } from './feature-group-details.component';

const routes: Routes = [
  {path:'',component:FeatureGroupDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureGroupDetailsRoutingModule { }
