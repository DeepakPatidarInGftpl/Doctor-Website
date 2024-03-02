import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHistoryComponent } from './product-history.component';

const routes: Routes = [{
  path:'',component:ProductHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductHistoryRoutingModule { }
