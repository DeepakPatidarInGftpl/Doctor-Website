import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandSubcategoryOfferComponent } from './add-brand-subcategory-offer.component';

const routes: Routes = [
  {path:'',component:AddBrandSubcategoryOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBrandSubcategoryOfferRoutingModule { }
