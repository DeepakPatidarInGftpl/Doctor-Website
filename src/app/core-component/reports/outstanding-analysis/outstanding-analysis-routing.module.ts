import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutstandingAnalysisComponent } from './outstanding-analysis.component';

const routes: Routes = [{
  path:'',component:OutstandingAnalysisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutstandingAnalysisRoutingModule { }
