import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTargetComponent } from './add-target.component';

const routes: Routes = [
  {path:'',component:AddTargetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTargetRoutingModule { }
