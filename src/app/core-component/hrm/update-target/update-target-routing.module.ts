import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTargetComponent } from './update-target.component';

const routes: Routes = [
  {path:'',component:UpdateTargetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTargetRoutingModule { }
