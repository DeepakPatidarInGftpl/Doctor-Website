import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSaleBillComponent } from './details-sale-bill.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsSaleBillComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_salebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsSaleBillRoutingModule { }
