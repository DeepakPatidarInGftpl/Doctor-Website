import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandOfferComponent } from './list-brand-offer.component';

const routes: Routes = [
  {path:'',component:ListBrandOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBrandOfferRoutingModule { }
