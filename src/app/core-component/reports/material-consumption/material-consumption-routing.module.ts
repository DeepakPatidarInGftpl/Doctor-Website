import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialConsumptionComponent } from './material-consumption.component';

const routes: Routes = [
  {
    path : '',
    component : MaterialConsumptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialConsumptionRoutingModule { }
