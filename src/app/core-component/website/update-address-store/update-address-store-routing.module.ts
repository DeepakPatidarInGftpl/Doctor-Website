import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAddressStoreComponent } from './update-address-store.component';

const routes: Routes = [
  {path:'',component:UpdateAddressStoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAddressStoreRoutingModule { }
