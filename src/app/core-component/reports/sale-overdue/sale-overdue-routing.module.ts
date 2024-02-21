import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleOverdueComponent } from './sale-overdue.component';

const routes: Routes = [{
  path:'',component:SaleOverdueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleOverdueRoutingModule { }
