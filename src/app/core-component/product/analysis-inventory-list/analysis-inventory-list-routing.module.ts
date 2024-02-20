import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisInventoryListComponent } from './analysis-inventory-list.component';

const routes: Routes = [
  {path:'',component:AnalysisInventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisInventoryListRoutingModule { }
