import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HsncodeWiseSaleComponent } from './hsncode-wise-sale.component';


const routes: Routes = [
  {
    path : '',
    component : HsncodeWiseSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HsncodeWiseSaleRoutingModule { }
