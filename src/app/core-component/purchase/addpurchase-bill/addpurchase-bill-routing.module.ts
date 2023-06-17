import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpurchaseBillComponent } from './addpurchase-bill.component';

const routes: Routes = [
  {path:'',component:AddpurchaseBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpurchaseBillRoutingModule { }
