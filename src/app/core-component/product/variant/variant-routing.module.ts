import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariantComponent } from './variant.component';

const routes: Routes = [{path:'',component:VariantComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantRoutingModule { }
