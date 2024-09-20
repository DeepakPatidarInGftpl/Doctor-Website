import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsncodeWisePurchaseComponent } from './hsncode-wise-purchase.component';

const routes: Routes = [
  {
    path : '',
    component : HsncodeWisePurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsncodeWisePurchaseRoutingModule { }
