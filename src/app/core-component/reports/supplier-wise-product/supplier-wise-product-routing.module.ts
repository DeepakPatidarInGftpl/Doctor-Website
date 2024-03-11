import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierWiseProductComponent } from './supplier-wise-product.component';

const routes: Routes = [{
  path:'',component:SupplierWiseProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierWiseProductRoutingModule { }
