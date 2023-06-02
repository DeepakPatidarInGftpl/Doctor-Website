import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductComponent } from './batch-variant-product.component';

const routes: Routes = [
  {path:'',component:BatchVariantProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductRoutingModule { }
