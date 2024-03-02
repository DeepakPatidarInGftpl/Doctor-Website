import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOutstandingComponent } from './purchase-outstanding.component';

const routes: Routes = [
  {path:'',component:PurchaseOutstandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOutstandingRoutingModule { }
