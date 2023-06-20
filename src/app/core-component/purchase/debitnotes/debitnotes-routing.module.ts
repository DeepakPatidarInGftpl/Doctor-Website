import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitnotesComponent } from './debitnotes.component';

const routes: Routes = [
  {path:'',component:DebitnotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitnotesRoutingModule { }
