import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingSaleOrderComponent } from './pending-sale-order.component';

const routes: Routes = [{
  path:'',component:PendingSaleOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingSaleOrderRoutingModule { }
