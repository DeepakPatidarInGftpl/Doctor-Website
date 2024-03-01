import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesByProductComponent } from './sales-by-product.component';

const routes: Routes = [{
  path:'',component:SalesByProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesByProductRoutingModule { }
