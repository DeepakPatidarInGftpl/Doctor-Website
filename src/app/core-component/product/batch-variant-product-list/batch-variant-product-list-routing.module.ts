import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductListComponent } from './batch-variant-product-list.component';

const routes: Routes = [
  {path:'',component:BatchVariantProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductListRoutingModule { }
