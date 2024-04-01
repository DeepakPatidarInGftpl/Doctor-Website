import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBrandOfferComponent } from './update-brand-offer.component';

const routes: Routes = [
  {path:'',component:UpdateBrandOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateBrandOfferRoutingModule { }
