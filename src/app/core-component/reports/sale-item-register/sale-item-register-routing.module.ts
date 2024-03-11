import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleItemRegisterComponent } from './sale-item-register.component';

const routes: Routes = [{
  path:'',component:SaleItemRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleItemRegisterRoutingModule { }
