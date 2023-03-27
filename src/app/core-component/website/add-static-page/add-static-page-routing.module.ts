import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaticPageComponent } from './add-static-page.component';

const routes: Routes = [
  {path:'',component:AddStaticPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStaticPageRoutingModule { }
