import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandWisePurchaseComponent } from './brand-wise-purchase.component';

const routes: Routes = [{
  path:'',component:BrandWisePurchaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandWisePurchaseRoutingModule { }
