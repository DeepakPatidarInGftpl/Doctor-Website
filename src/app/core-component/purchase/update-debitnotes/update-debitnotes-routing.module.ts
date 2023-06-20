import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDebitnotesComponent } from './update-debitnotes.component';

const routes: Routes = [
  {path:'',component:UpdateDebitnotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDebitnotesRoutingModule { }
