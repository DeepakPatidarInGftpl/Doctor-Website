import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialConsumptionComponent } from './add-material-consumption.component';

const routes: Routes = [
  {path:'',component:AddMaterialConsumptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMaterialConsumptionRoutingModule { }
