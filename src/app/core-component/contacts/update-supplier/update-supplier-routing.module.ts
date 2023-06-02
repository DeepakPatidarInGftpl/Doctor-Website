import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSupplierComponent } from './update-supplier.component';

const routes: Routes = [
  {path:'',component:UpdateSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSupplierRoutingModule { }
