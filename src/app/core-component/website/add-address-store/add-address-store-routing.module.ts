import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressStoreComponent } from './add-address-store.component';

const routes: Routes = [
  {path:'',component:AddAddressStoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAddressStoreRoutingModule { }
