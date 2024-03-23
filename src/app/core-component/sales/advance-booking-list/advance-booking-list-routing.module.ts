import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceBookingListComponent } from './advance-booking-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{
  path:'',component:AdvanceBookingListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_advancebooking']} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceBookingListRoutingModule { }
