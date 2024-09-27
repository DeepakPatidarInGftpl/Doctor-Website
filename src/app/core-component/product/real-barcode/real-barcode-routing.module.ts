import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealBarcodeComponent } from './real-barcode.component';

const routes: Routes = [
  {
    path:'',
    component:RealBarcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealBarcodeRoutingModule { }
