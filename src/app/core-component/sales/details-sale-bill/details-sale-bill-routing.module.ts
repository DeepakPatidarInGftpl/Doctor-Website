import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSaleBillComponent } from './details-sale-bill.component';

const routes: Routes = [
  {path:'',component:DetailsSaleBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsSaleBillRoutingModule { }
