import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandSubcategoryOfferComponent } from './list-brand-subcategory-offer.component';

const routes: Routes = [
  {path:'',component:ListBrandSubcategoryOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBrandSubcategoryOfferRoutingModule { }
