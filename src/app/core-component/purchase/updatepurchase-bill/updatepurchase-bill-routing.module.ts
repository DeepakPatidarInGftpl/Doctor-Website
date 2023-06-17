import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatepurchaseBillComponent } from './updatepurchase-bill.component';

const routes: Routes = [
  {path:'',component:UpdatepurchaseBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatepurchaseBillRoutingModule { }
