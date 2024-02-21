import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMaterialConsumptionComponent } from './list-material-consumption.component';

const routes: Routes = [
  {path:'',component:ListMaterialConsumptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMaterialConsumptionRoutingModule { }
