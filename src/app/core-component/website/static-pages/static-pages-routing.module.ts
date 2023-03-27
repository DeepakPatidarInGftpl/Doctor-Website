import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticPagesComponent } from './static-pages.component';

const routes: Routes = [
  {path:'',component:StaticPagesComponent},
  { path: 'details/:slug',
  loadChildren: () =>
    import('./staticpage-detals/staticpage-detals.module').then(
      (m) => m.StaticpageDetalsModule
    ),}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
