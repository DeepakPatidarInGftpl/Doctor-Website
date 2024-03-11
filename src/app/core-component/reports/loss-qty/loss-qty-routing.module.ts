import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LossQtyComponent } from './loss-qty.component';

const routes: Routes = [{
  path:'',component:LossQtyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossQtyRoutingModule { }
