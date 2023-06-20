import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTrendingProductsComponent } from './details-trending-products.component';

const routes: Routes = [
  {path:'',component:DetailsTrendingProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsTrendingProductsRoutingModule { }
