import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryWisePurchaseComponent } from './category-wise-purchase.component';

const routes: Routes = [
  {path:'',component:CategoryWisePurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryWisePurchaseRoutingModule { }
