import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabsComponent } from './tax-slabs.component';

const routes: Routes = [{path:'',component:TaxSlabsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabsRoutingModule { }
