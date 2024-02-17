import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDaybookComponent } from './product-daybook.component';

const routes: Routes = [{
  path:'',component:ProductDaybookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDaybookRoutingModule { }
