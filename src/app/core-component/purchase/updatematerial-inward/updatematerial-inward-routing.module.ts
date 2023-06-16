import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatematerialInwardComponent } from './updatematerial-inward.component';

const routes: Routes = [
  {path:'',component:UpdatematerialInwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatematerialInwardRoutingModule { }
