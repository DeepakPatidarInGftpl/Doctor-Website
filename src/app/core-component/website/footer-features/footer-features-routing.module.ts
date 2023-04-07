import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterFeaturesComponent } from './footer-features.component';

const routes: Routes = [{path:'',component:FooterFeaturesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterFeaturesRoutingModule { }
