import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierWiseComponent } from '../supplier-wise/supplier-wise.component';

const routes: Routes = [{
  path:'',component:SupplierWiseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierWiseProductRoutingModule { }
