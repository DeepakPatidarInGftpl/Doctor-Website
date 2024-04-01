import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdayeBrandSubcategoryOfferComponent } from './updaye-brand-subcategory-offer.component';

const routes: Routes = [
  {path:'',component:UpdayeBrandSubcategoryOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdayeBrandSubcategoryOfferRoutingModule { }
