import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressStoreComponent } from './address-store.component';

const routes: Routes = [
  {path:'',component:AddressStoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressStoreRoutingModule { }
