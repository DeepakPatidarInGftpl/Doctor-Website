import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintMaterialInwardComponent } from './print-material-inward.component';

const routes: Routes = [
  {path:'',component:PrintMaterialInwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintMaterialInwardRoutingModule { }
