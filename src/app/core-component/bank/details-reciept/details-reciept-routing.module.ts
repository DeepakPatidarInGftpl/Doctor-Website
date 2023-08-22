import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRecieptComponent } from './details-reciept.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsRecieptComponent,canActivate: [RolesGuardGuard], data: { allowedRoles: ['view_receipt'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRecieptRoutingModule { }
