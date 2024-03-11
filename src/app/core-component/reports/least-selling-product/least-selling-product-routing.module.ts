import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeastSellingProductComponent } from './least-selling-product.component';

const routes: Routes = [{
  path:'',component:LeastSellingProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeastSellingProductRoutingModule { }
