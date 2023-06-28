import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFooterComponent } from './add-footer.component';

const routes: Routes = [
  {path:'',component:AddFooterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFooterRoutingModule { }
