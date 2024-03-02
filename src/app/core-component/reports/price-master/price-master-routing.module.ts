import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceMasterComponent } from './price-master.component';

const routes: Routes = [{
  path:'',component:PriceMasterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceMasterRoutingModule { }
