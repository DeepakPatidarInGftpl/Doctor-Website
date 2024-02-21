import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMaterialConsumptionComponent } from './update-material-consumption.component';

const routes: Routes = [
  {path:'',component:UpdateMaterialConsumptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMaterialConsumptionRoutingModule { }
