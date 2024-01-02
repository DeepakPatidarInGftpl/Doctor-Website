import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTargetComponent } from './list-target.component';

const routes: Routes = [
  {path:'',component:ListTargetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTargetRoutingModule { }
