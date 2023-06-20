import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingProductsComponent } from './trending-products.component';

const routes: Routes = [
  {path:'',component:TrendingProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingProductsRoutingModule { }
