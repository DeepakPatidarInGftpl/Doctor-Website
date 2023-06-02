import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailSupplierComponent } from './detail-supplier.component';

const routes: Routes = [
  {path:'',component:DetailSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailSupplierRoutingModule { }
