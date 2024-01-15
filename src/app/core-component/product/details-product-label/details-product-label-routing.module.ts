import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductLabelComponent } from './details-product-label.component';

const routes: Routes = [
  {path:'',component:DetailsProductLabelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsProductLabelRoutingModule { }
