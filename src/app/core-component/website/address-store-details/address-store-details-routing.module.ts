import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressStoreDetailsComponent } from './address-store-details.component';

const routes: Routes = [
  {path:'',component:AddressStoreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressStoreDetailsRoutingModule { }
