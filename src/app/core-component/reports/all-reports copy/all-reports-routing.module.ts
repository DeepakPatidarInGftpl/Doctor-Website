import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReportsComponent } from './all-reports.component';

const routes: Routes = [{
  path:'',component:AllReportsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllReportsRoutingModule { }
