import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMaterialConsumptionComponent } from './detail-material-consumption.component';

const routes: Routes = [
  {path:'',component:DetailMaterialConsumptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMaterialConsumptionRoutingModule { }
