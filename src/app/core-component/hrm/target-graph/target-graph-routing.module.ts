import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetGraphComponent } from './target-graph.component';

const routes: Routes = [
  {path:'',component:TargetGraphComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetGraphRoutingModule { }
