import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticpageDetalsComponent } from './staticpage-detals.component';

const routes: Routes = [
  {path:'',component:StaticpageDetalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpageDetalsRoutingModule { }
