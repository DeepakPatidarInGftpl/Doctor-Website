import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateBrandOfferComponent } from './update-brand-offer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateBrandOfferComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateBrandOfferRoutingModule { }
