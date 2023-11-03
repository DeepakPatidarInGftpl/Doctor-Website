import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitDetailsComponent } from './unit-details.component';

const routes: Routes = [
  {path:'',component:UnitDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitDetailsRoutingModule { }
