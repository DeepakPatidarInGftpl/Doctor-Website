import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVendorComponent } from './detail-vendor.component';

const routes: Routes = [
  {path:'',component:DetailVendorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailVendorRoutingModule { }
