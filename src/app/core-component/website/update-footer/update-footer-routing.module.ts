import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFooterComponent } from './update-footer.component';

const routes: Routes = [
  {path:'',component:UpdateFooterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateFooterRoutingModule { }
