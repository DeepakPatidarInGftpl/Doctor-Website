import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandOfferComponent } from './list-brand-offer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListBrandOfferComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBrandOfferRoutingModule { }
