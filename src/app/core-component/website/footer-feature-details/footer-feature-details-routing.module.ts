import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterFeatureDetailsComponent } from './footer-feature-details.component';

const routes: Routes = [
  {path:'',component:FooterFeatureDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterFeatureDetailsRoutingModule { }
