import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebitnotesComponent } from './add-debitnotes.component';

const routes: Routes = [
  {path:'',component:AddDebitnotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDebitnotesRoutingModule { }
