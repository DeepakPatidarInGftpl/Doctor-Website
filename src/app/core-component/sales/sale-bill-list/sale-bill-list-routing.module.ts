import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleBillListComponent } from './sale-bill-list.component';

const routes: Routes = [
  {path:'',component:SaleBillListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleBillListRoutingModule { }
