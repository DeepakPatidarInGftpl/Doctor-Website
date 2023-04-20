import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabsListComponent } from './tax-slabs-list.component';

const routes: Routes = [
  {path:'',component:TaxSlabsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabsListRoutingModule { }
