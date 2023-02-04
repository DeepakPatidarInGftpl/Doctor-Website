import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGroupComponent } from './feature-group.component';

const routes: Routes = [{path:'',component:FeatureGroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureGroupRoutingModule { }
