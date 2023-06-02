import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductUpdateComponent } from './batch-variant-product-update.component';

const routes: Routes = [
  {path:'',component:BatchVariantProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductUpdateRoutingModule { }
