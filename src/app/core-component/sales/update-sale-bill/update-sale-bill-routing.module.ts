import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSaleBillComponent } from './update-sale-bill.component';

const routes: Routes = [
  {path:'',component:UpdateSaleBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSaleBillRoutingModule { }
