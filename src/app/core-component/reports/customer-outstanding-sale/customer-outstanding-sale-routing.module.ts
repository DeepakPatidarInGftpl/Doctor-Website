import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOutstandingSaleComponent } from './customer-outstanding-sale.component';

const routes: Routes = [{
  path:'',component:CustomerOutstandingSaleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOutstandingSaleRoutingModule { }
