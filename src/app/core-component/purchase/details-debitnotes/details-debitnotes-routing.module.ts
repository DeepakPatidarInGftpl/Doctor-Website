import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDebitnotesComponent } from './details-debitnotes.component';

const routes: Routes = [
  {path:'',component:DetailsDebitnotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDebitnotesRoutingModule { }
