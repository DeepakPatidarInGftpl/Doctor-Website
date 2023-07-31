import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPosOrderComponent } from './details-pos-order.component';

const routes: Routes = [
  {path:'',component:DetailsPosOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPosOrderRoutingModule { }
