import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcAnalysisComponent } from './abc-analysis.component';

const routes: Routes = [{
  path:'',component:AbcAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcAnalysisRoutingModule { }
