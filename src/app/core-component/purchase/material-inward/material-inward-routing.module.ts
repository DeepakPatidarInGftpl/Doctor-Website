import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialInwardComponent } from './material-inward.component';

const routes: Routes = [
  {path:'',component:MaterialInwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialInwardRoutingModule { }
