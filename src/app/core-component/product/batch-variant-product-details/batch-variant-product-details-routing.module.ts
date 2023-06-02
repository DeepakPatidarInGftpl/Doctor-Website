import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductDetailsComponent } from './batch-variant-product-details.component';

const routes: Routes = [
  {path:'',component:BatchVariantProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductDetailsRoutingModule { }
