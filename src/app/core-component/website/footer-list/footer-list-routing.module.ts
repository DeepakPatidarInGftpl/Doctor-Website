import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterListComponent } from './footer-list.component';

const routes: Routes = [
  {path:'',component:FooterListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterListRoutingModule { }
