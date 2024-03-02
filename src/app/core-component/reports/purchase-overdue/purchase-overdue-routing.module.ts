import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOverdueComponent } from './purchase-overdue.component';

const routes: Routes = [
  {path:'',component:PurchaseOverdueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOverdueRoutingModule { }
