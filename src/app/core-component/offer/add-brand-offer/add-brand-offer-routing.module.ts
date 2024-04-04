import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandOfferComponent } from './add-brand-offer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddBrandOfferComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBrandOfferRoutingModule { }
