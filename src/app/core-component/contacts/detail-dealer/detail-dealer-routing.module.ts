import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailDealerComponent } from './detail-dealer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailDealerComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_dealer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDealerRoutingModule { }
