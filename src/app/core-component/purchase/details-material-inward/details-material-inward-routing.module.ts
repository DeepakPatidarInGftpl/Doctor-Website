import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMaterialInwardComponent } from './details-material-inward.component';

const routes: Routes = [
  {path:'',component:DetailsMaterialInwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMaterialInwardRoutingModule { }
