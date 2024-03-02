import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierOutstandingComponent } from './supplier-outstanding.component';

const routes: Routes = [{
  path:'',component:SupplierOutstandingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierOutstandingRoutingModule { }
