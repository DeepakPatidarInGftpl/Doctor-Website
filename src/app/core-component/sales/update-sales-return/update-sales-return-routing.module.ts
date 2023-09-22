import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSalesReturnComponent } from './update-sales-return.component';

const routes: Routes = [
  {path:'',component:UpdateSalesReturnComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSalesReturnRoutingModule { }
