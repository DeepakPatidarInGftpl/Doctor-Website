import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdayeBrandSubcategoryOfferComponent } from './updaye-brand-subcategory-offer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdayeBrandSubcategoryOfferComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdayeBrandSubcategoryOfferRoutingModule { }
