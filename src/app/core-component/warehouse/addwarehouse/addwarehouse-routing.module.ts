import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwarehouseComponent } from './addwarehouse.component';

const routes: Routes = [{path:'',component:AddwarehouseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddwarehouseRoutingModule { }
