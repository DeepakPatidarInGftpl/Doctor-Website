import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabDetailComponent } from './tax-slab-detail.component';

const routes: Routes = [{path:'',component:TaxSlabDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabDetailRoutingModule { }
