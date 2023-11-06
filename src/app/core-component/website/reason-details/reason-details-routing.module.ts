import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReasonDetailsComponent } from './reason-details.component';

const routes: Routes = [
  {path:'',component:ReasonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasonDetailsRoutingModule { }
