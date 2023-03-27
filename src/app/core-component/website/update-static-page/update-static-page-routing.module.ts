import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStaticPageComponent } from './update-static-page.component';

const routes: Routes = [
  {path:'',component:UpdateStaticPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateStaticPageRoutingModule { }
