import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspurchaseBillComponent } from './detailspurchase-bill.component';

const routes: Routes = [
  {path:'',component:DetailspurchaseBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailspurchaseBillRoutingModule { }
