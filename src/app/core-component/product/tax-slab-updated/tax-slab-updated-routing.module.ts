import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabUpdatedComponent } from './tax-slab-updated.component';

const routes: Routes = [{path:'',component:TaxSlabUpdatedComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabUpdatedRoutingModule { }
